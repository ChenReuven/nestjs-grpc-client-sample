import { Observable } from 'rxjs';

export interface IGrpcService {
  accumulate(numberArray: INumberArray): Observable<number>;
}

interface INumberArray {
  data: number[];
}
