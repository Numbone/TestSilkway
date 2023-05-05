import { makeAutoObservable } from "mobx";
export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Молоко" },
      { id: 2, name: "Сметана" },
      { id: 3, name: "Картошка" },
      { id: 4, name: "Запчасти" },
      { id: 5, name: "Колеса" },
      { id: 6, name: "Телефоны" },
    ];
    this._devices = [];
    this._selectedType = {};
    this._providerDevice = [];
    makeAutoObservable(this);
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setProviderDevice(devices) {
    this._providerDevice = devices;
  }
  setTypes(types) {
    this._types = types;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  get devices() {
    return this._devices;
  }
  get providerDevices() {
    return this._providerDevice;
  }
  get types() {
    return this._types;
  }
  get selectedType() {
    return this._selectedType;
  }
}
