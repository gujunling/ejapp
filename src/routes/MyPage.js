import React from 'react'
import {NavBar, Icon, List,Accordion} from 'antd-mobile'


const Item = List.Item;
 


class MyPage extends React.Component {

  constructor(props){
    super(props)
   
     this.state = {
      visible: true,
      selected: '',
     }   
   
  }
  onChange = (key) => {
    console.log(key);
  }


  toHelp=(Num)=>{
    if(Num===1){
      this.props.history.push("/my01");
    }else if(Num===2){
      this.props.history.push("/my02");
    }else if(Num===3){
      this.props.history.push("/my03");
    }else if(Num===4){
      this.props.history.push("/my04");
    }else if(Num===5){
      this.props.history.push("/my05");
    }
  }
 
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  render(){
    return (
 
      <div>

          <div>
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >我的</NavBar>

    <NavBar
      mode="dark"
      leftContent="Back"
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >我的</NavBar>
  </div>
         <hr></hr>
        <div>
        
        <div>------------------------------------------------------------------</div>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="我的基本信息">
            <List className="my-list" >
              <List.Item>姓名：</List.Item>
              <List.Item>手机号：</List.Item>
              <List.Item>密码：</List.Item>
              <List.Item>状态：</List.Item>
              <List.Item>头像：</List.Item>
             
            </List>
          </Accordion.Panel>
          
        </Accordion>
      </div>      
       
        <List 
          
          className="my-list"
          >
            <Item
           
            multipleLine
          
            onClick={()=>this.toHelp(1)}
            >
              <font face="verdana" size="4" color="green"> 充值</font>
             
              <div>--------------------------------------------------</div>
              </Item>
            <Item
           
            multipleLine
          
            onClick={()=>this.toHelp(2)}
            >
              <font face="verdana" size="4" color="green"> 常用地址</font>
            
              <div>--------------------------------------------------</div>
              </Item>
              <Item
            
            multipleLine
          
            onClick={()=>this.toHelp(3)}
            >
              <font face="verdana" size="4" color="green"> 我的订单</font>
            
              <div>--------------------------------------------------</div>
              </Item>  
            <Item
            
            multipleLine
           
            onClick={()=>this.toHelp(4)}
            >
              <font face="verdana" size="4" color="green"> 联系我们</font>
           
             <div>--------------------------------------------------</div>
              </Item> 
              <Item
            
            multipleLine
            
            onClick={()=>this.toHelp(5)}
            >
              <font face="verdana" size="4" color="green"> 设置</font>
           
             <div>--------------------------------------------------</div>
              </Item> 
                    
        </List>        
        </div>
      </div>
      
    )
  }
}

export default MyPage;