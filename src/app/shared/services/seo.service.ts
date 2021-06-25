import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

export class SeoService {

  constructor(
    @Inject(DOCUMENT) private dom,
    private titleService: Title,
    private metaService: Meta,
  ) {}

  updateTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  updateDescription(content: string): void {
    this.metaService.updateTag({ name: 'description', content });
  }

}
