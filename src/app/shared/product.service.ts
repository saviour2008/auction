import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products: Product[] = [
  //   new Product(1, "北京", 1, 2, "首都", "北京，简称“京”，是中华人民共和国的首都、直辖市、国家中心城市、超大城市、国际大都市，全国政治中心、文化中心、国际交往中心、科技创新中心和综合交通枢纽，是中国共产党中央委员会、中华人民共和国中央人民政府、全国人民代表大会、中国人民政治协商会议全国委员会、中华人民共和国中央军事委员...", ["直辖市", "省会", "城市"]),
  //   new Product(2, "上海", 2, 3, "直辖市", "上海，简称“沪”或“申”，是中国共产党的诞生地，中华人民共和国直辖市、国家中心城市、超大城市，国际经济、金融、贸易、航运、科技创新中心和综合交通枢纽，首批沿海开放城市。上海地处长江入海口，是长江经济带的龙头城市、G60科创走廊核心城市。隔东中国海与日本九州岛相望，南濒杭州湾，北、西...", ["直辖市", "省会", "城市"]),
  //   new Product(3, "大连", 3, 3, "城市", "大连是辽宁省下辖地级市，是中央确定的计划单列市、副省级市，别称滨城，位于辽宁省辽东半岛南端，地处黄渤海之滨，背依中国东北腹地，与山东半岛隔海相望；基本地貌为中央高，向东西两侧阶梯状降低；地处北半球的暖温带、亚欧大陆的东岸，属暖温带半湿润大陆性季风气候；总面积12573.85平方千米，下辖...", ["直辖市", "省会", "城市"]),
  //   new Product(4, "天津", 4, 4, "直辖市", "天津，简称津，是中华人民共和国直辖市、国家中心城市、超大城市、环渤海地区经济中心、首批沿海开放城市、综合交通枢纽，全国先进制造研发基地、北方国际航运核心区、金融创新运营示范区、改革开放先行区。天津自古因漕运而兴起，明永乐二年十一月二十一日（1404年12月23日）正式筑城，是中国古代唯一...", ["直辖市", "省会", "城市"]),
  //   new Product(5, "西安", 5, 1, "省会", "西安，古称长安、镐京，是陕西省会、副省级市、关中平原城市群核心城市、丝绸之路起点城市、“一带一路”核心区、中国西部地区重要的中心城市，国家重要的科研、教育、工业基地。西安是中国四大古都之一，联合国科教文组织于1981年确定的“世界历史名城”，美媒评选的世界十大古都之一。地处关中平原中...", ["直辖市", "省会", "城市"]),
  //   new Product(6, "成都", 6, 0, "省会", "成都是四川省省会，简称蓉，别称蓉城、锦城，副省级市，特大城市，位于四川盆地西部，成都平原腹地，境内地势平坦、河网纵横、物产丰富、农业发达，属亚热带季风性湿润气候。下辖11区、4县，代管5县级市，总面积14335平方千米；2017年常住人口1604.5万人。成都是全球重要的电子信息产业基地，是国家历...", ["直辖市", "省会", "城市"]),
  //   new Product(7, "南京", 7, 2, "省会", "南京，简称“宁”，古称金陵、建康，是江苏省会、副省级市、南京都市圈核心城市，国务院批复确定的中国东部地区重要的中心城市、全国重要的科研教育基地和综合交通枢纽。全市下辖11个区，总面积6587km²，2017年建成区面积1398.69km²，常住人口833.5万人，城镇人口685.89万人，城镇化率82.3%，是长三...", ["直辖市", "省会", "城市"])
  // ]
  // private comments: Comment[] = [
  //   new Comment(1, 1, 1545836114320, "peter", 2, "I like it"),
  //   new Comment(2, 2, 1545866114320, "peter", 3, "I like it"),
  //   new Comment(3, 1, 1545856114320, "peter", 2, "I like it"),
  //   new Comment(4, 2, 1545846114320, "peter", 3, "I like it"),
  // ]
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get("/api/products");
  }
  getProduct(id: number): Observable<any> {
    return this.http.get("/api/product/"+id);
  }
  getCommentsForProductId(id: number): Observable<any> {
    return this.http.get("/api/product/" + id +"/comment");
  }
  getAllCategories(): string[] {
    return ["直辖市", "省会", "城市"];
  }
}
export class Product {
  constructor(public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public summary: string,
    public category: Array<string>
  ) {

  }
}
export class Comment {
  constructor(public id: number,
    public productId: number,
    public timestamp: number,
    public user: string,
    public rating: number,
    public content: string
  ) {
  }
}