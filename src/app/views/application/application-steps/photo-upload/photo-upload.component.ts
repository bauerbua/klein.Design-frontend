import { Component, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent {
  @Output() photosSelected = new EventEmitter<any>();

  selectedImages: any[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  onImgSelected($event): any {
    const filesList = $event.target.files;
    for (const file of filesList) {
      if (!this.selectedImages.some((image) => image.name === file.name)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.cropImage(reader.result as string, file).then((croppedImg) => {
            this.selectedImages.push(croppedImg);
            this.photosSelected.next(this.selectedImages);
          });
        };
      }
    }
  }

  onRemoveImg(file: any): void {
    const index = this.selectedImages.indexOf(file);
    this.selectedImages.splice(index, 1);
    this.photosSelected.next(this.selectedImages);
  }

  cropImage(imageSrc: string, file: File): Promise<any> {
    let croppedImg;
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const elem = document.createElement('canvas');
        const maxWidth = 500;
        elem.width = img.naturalWidth;
        elem.height = img.naturalHeight;
        // define width of image
        if (img.width > maxWidth) {
          const cropRatio = maxWidth / img.width;
          elem.width = img.naturalWidth * cropRatio;
          elem.height = img.naturalHeight * cropRatio;
        }
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, elem.width, elem.height);
        // create file of canvas
        ctx.canvas.toBlob((blob) => {
          const objectURL = URL.createObjectURL(blob);
          const resizedFile = new File([blob], file.name, {type: file.type});
          const resizedImgSrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          croppedImg = {
            file: resizedFile,
            imgSrc: resizedImgSrc
          };
          resolve(croppedImg);
        }, file.type, 0.9);
      };
      img.src = imageSrc;
    });
  }
}
