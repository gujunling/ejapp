import React from 'react'
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import styles from './OrderPage.css'
const data = [
  {
    value: '1',
    label: '洗护',
    children: [
      {
        label: 'All Foods',
        value: '1',
        disabled: false,
      },
      {
        label: 'Chinese Food',
        value: '2',
      }
      
    ],
  }, {
    value: '2',
    label: '保洁',
    children: [
      {
        label: 'All Supermarkets',
        value: '1',
      }],
  },
  {
    value: '3',
    label: '看护',
    disabled: true,
    children: [
      {
        label: 'hhahhvwcgbyuhnj',
        value: '1',
      },
    ],
  },
  {
    value: '4',
    label: '月嫂',
    disabled: true,
    children: [
      {
        label: 'hahaha',
        value: '1',
      },
    ],
  },
  {
    value: '5',
    label: '其他',
    disabled: true,
    children: [
      {
        label: 'qwer',
        value: '1',
      },
    ],
  },
];

class OrderPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }
  onChange = (value) => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
        
        
      }
    });
    console.log(label);
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="styles.fooMenu"
        data={initData}
        value={['1', '3']}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.85}
      />
    );
    const loadingEl = (
      <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.85, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? styles ["menu-active"] : ''}>
        <div>
          <NavBar
            leftContent="菜单"
            mode="light"
            icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
            onLeftClick={this.handleClick}
            className={styles ["top-nav-bar"]}
          >
            商品分类
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menuMask" onClick={this.onMaskClick} /> : null}
      </div>
    );
  }
}


export default OrderPage;