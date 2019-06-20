import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css'
import axios from '../utils/axios'
import { Carousel, WingBlank,NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

class IndexPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categories:[],
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
  }
  

componentDidMount(){
  
  this.loadCategory();
  setTimeout(() => {
    this.setState({
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    });
  }, 100);
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
     <div >
      

     <WingBlank>
        <Carousel  
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val ) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
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
    
  <div>
    <WhiteSpace size="lg" />
    <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
    Notice:您好，您有一条关于您最近经常查看的问题的消息，请您查阅！
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="link" onClick={() => alert('1')}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable" icon={null}>Remove the default icon.</NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
      Customized icon.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
      Closable demo for `actionText`.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="link" action={<span>去看看</span>}>
      Link demo for `actionText`.
    </NoticeBar>
  </div>

     </div>
     </div>
     );
  }
  
  }


export default connect()(IndexPage);
