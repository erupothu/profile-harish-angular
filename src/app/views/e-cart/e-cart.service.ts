import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ECartService {

  public dataSource = [
    {id: '1', name: 'hp laptiop 101', category: 'electronices', price: '10050', total_quantity: '100', quantity_left: '50', active: '',
    basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'},
    {id: '2', name: 'hp laptiop 102', category: 'electronices', price: '25000', total_quantity: '100', quantity_left: '30', active: '',
  basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'},
    {id: '3', name: 'dell laptop A20G', category: 'electronices', price: '36000', total_quantity: '100', quantity_left: '10', active: '',
  basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'},
    {id: '4', name: 'dell PC A20GAC', category: 'electronices', price: '35000', total_quantity: '100', quantity_left: '40', active: '',
  basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'},
    {id: '5', name: 'santoor soap', category: 'home needs', price: '40', total_quantity: '100', quantity_left: '20', active: '',
  basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'},
    {id: '6', name: 'baby oil', category: 'baby care', price: '500', total_quantity: '100', quantity_left: '70', active: '',
  basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'},
    {id: '7', name: 'baby dress', category: 'baby care', price: '1500', total_quantity: '100', quantity_left: '15', active: '',
  basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'},
    {id: '8', name: 'baby food', category: 'baby care', price: '2000', total_quantity: '100', quantity_left: '50', active: '',
  basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'},
    {id: '9', name: 'mens dress', category: 'cloths', price: '2500', total_quantity: '100', quantity_left: '40', active: '',
  basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'},
    {id: '10', name: 'womens dress', category: 'cloths', price: '2300', total_quantity: '100', quantity_left: '25', active: '',
  basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'},
    {id: '11', name: 'baby dress', category: 'cloths', price: '2000', total_quantity: '100', quantity_left: '20', active: '',
  basic_info:'this is best laptop in 2020', description: 'this is basic laptop with good features', image_path: '../../../assets/images/cup-img2.jpg', mrp: '11000'}
  ];
  constructor() { }
}
