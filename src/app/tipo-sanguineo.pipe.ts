import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tipoSanguineo'
})
export class TipoSanguineoPipe implements PipeTransform {
  public transform(value): string{
      return value.replace("+","Positivo").replace("-","Negativo")
  }
}