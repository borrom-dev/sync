import { TestBed, inject } from '@angular/core/testing';

import { EditorArticleResolverService } from './editor-article-resolver.service';

describe('EditorArticleResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorArticleResolverService]
    });
  });

  it('should be created', inject([EditorArticleResolverService], (service: EditorArticleResolverService) => {
    expect(service).toBeTruthy();
  }));
});
