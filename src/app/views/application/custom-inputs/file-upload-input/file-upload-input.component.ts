import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormConfig } from '../../application.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload-input',
  templateUrl: './file-upload-input.component.html',
  styleUrls: ['./file-upload-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadInputComponent),
      multi: true
    }
  ]
})
export class FileUploadInputComponent implements OnInit, ControlValueAccessor {
  @Input() input: FormConfig;

  value: any;
  selectedImages: any[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  onTouched: () => void;
  onChange: (value: any) => void;

  ngOnInit(): void {
  }

  writeValue(value: any[]): void {
    if (value) {
      this.selectedImages = value;
    } else {
      this.selectedImages = [];
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  onImgSelected($event): any {
    const filesList = $event.target.files;
    for (const file of filesList) {
      if (!this.selectedImages.some((image) => image.name === file.name)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.cropImage(reader.result as string, file).then((croppedImg) => {
            this.selectedImages.push(croppedImg);
            this.onChange(this.selectedImages.map((image) => image.file));
          });
        };
      }
    }
  }

  onRemoveImg(file: any): void {
    const index = this.selectedImages.indexOf(file);
    this.selectedImages.splice(index, 1);
    this.onChange(this.selectedImages.map((image) => image.file));
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
