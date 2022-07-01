export interface Order{
  id:number;
  userId:number;
  type:number;
  status:number;
  subTotal:number;
  itemDiscount:number;
  tax:number;
  shipping:number;
  total:number;
  promo:string;
  discount:number;
  grandTotal:number;
  description:string;
}
