import React from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import styles from './HelpPage.css'

const tabs = [
  { title: <Badge dot>全部订单</Badge> },
  { title: <Badge dot>待付款</Badge> },
  { title: <Badge dot>待服务</Badge> },
  { title: <Badge dot>待评价</Badge> },
];


class HelpPage extends React.Component {

  render(){
    const TabExample = () => (
     <div>
       
     </div>
    );
    return (
      <div>
        <div>
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div className={styles.tab} style={{  alignItems: 'center',  justifyContent: 'center' }}>
           第一个
          </div>
          <div className={styles.tab} style={{  alignItems: 'center', justifyContent: 'center' }}>
          第二个
          </div>
          <div className={styles.tab} style={{  alignItems: 'center', justifyContent: 'center' }}>
          第三个
          </div>
          <div className={styles.tab} style={{  alignItems: 'center', justifyContent: 'center'}}>
          第四个
          </div>
        </Tabs>
        <WhiteSpace />
        
      </div>

      </div>
    )
  }
}

export default HelpPage;