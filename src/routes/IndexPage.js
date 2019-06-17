import React from 'react';
import { connect } from 'dva';
import t from '../assets/yay.jpg'
import styles from './IndexPage.css'
import axios from '../utils/axios'


class IndexPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categories:[]
    }
  }

componentDidMount(){
  
  this.loadCategory();
}

loadCategory(){
  axios.get('/category/findAll')
  .then((result)=>{
    // 将数据设置到局部状态中
    this.setState({
      categories:result.data
    })
  });
}

toProduct(){
  this.props.history.push("/product");
}


  render(){
    return(
    <div>
     {/* {图片} */}
     <div className={styles.photoWall}>
      <img className={styles.photo} src={t}></img>
     </div>


     {/* {栏目} */}
     <div>
     <ul className={styles["category_list"]}>
            {
              this.state.categories.map((item)=>{
                return (
                  <li  onLick={this.toProduct.bind(this)} key={item.id} className={styles["category_list_item"]}>
                    <div>
                      
                    </div>
                    <div>{item.name}</div>
                  </li>
                )
              })
            }
      </ul>
     </div>
     {/* {产品} */}
     <div>
       <p>产品</p>
     </div>
     </div>
     );
  }
  
  }


export default connect()(IndexPage);
