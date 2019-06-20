import React from 'react'
import {NavBar, Icon, List,  Button} from 'antd-mobile'



class HelpPage extends React.Component {

  constructor(props){
    super(props)
     this.state = {

     }   
  }
  //详情
  toDetails(record){
  console.log(record);
  //跳转
  this.props.history.push({
    pathname:"/my04",
    payload:record
  });
}

  toHelp=(Num)=>{
    if(Num===1){
      this.props.history.push("/help01");
    }else if(Num===2){
      this.props.history.push("/help02");
    }else if(Num===3){
      this.props.history.push("/help03");
    }else if(Num===4){
      this.props.history.push("/help04");
    }else{
      this.props.history.push("/help05");
    }
  }

  render(){const Item = List.Item;
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
          ]}
        >帮助</NavBar>
         <hr></hr>
        <div>
        
          <h3 >
            常见问题:
          </h3>        
          
        <List 
          
          className="my-list"
          >
            <Item 
            
            multipleLine
            onClick={()=>this.toHelp(1)}
            >
              <font face="verdana" size="2" color="green"> 1.优惠券要如何去使用?</font>
              <div>--------------------------------------------------</div>
              </Item>
            <Item
            
            multipleLine
      
            onClick={()=>this.toHelp(2)}
            >
              <font face="verdana" size="2" color="green"> 2.选择取消订单后钱什么时候到账?</font>
             <div>--------------------------------------------------</div>
              </Item>
            <Item
            
            multipleLine
            onClick={()=>this.toHelp(3)}
            >
              <font face="verdana" size="2" color="green"> 3.可以固定同一个阿姨服务吗?</font>            
             <div>--------------------------------------------------</div>
              </Item>
            <Item
            
            multipleLine
            onClick={()=>this.toHelp(4)}
            >
              <font face="verdana" size="2" color="green"> 4.如何选择上一次服务的阿姨？</font>      
              <div>--------------------------------------------------</div>
              </Item>
            <Item
            
            multipleLine
            onClick={()=>this.toHelp(5)}
            >
              <font face="verdana" size="2" color="green"> 5.预约成功后在哪查看?</font>
              <div>--------------------------------------------------</div>
              </Item>
        </List>
        <hr></hr>
        </div>
        <h3>更多问题请联系在线客服 </h3>
        <div>-------------------------------------------------------------</div>
        <div>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        <Button type='link' onClick={this.toDetails.bind(this)} >在线客服</Button> 
        </div>
      </div>
      
    )
  }
}

export default HelpPage;
