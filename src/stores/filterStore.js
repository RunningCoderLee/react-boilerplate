import { observable, action } from 'mobx';
import { FilterTypes } from 'Utils/enumerations';

export default class Filter {
  @observable type = FilterTypes.ALL

  @action change(type) {
    this.type = type;
  }
}
