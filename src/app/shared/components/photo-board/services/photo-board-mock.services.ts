import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.services';
import { Photo } from '../interfaces/photo';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
