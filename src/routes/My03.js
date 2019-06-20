import React from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import styles from './My03.css'

const tabs = [
  { title: <Badge dot>全部订单</Badge> },
  { title: <Badge dot>待付款</Badge> },
  { title: <Badge dot>待服务</Badge> },
  { title: <Badge dot>待评价</Badge> },
];


class My03 extends React.Component {

  render(){
    
    return (
      <div>
        <div>
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div className={styles.tab} style={{  alignItems: 'center',  justifyContent: 'center' }}>
              <br></br>
              <br></br>
              <br></br>
          <font face="verdana" size="6" > 亲，这是您的全部订单</font>
          </div>
          <div className={styles.tab} style={{  alignItems: 'center', justifyContent: 'center' }}>
          <br></br>
              <br></br>
              <br></br>
          <font face="verdana" size="6" > 亲，这是您的待付款订单</font>
          </div>
          <div className={styles.tab} style={{  alignItems: 'center', justifyContent: 'center' }}>
          <br></br>
              <br></br>
              <br></br>
          <font face="verdana" size="6" > 亲，这是您的待服务订单</font>
          </div>
          <div className={styles.tab} style={{  alignItems: 'center', justifyContent: 'center'}}>
          <br></br>
              <br></br>
              <br></br>
          <font face="verdana" size="6" > 亲，这是您的待评价订单</font>
          </div>
        </Tabs>
        <WhiteSpace />
        
      </div>

      </div>
    )
  }
}

export default My03;