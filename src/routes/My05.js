import React from 'react'
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

class My05 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           checked: false,
          checked1: true,
        };
      }
    


  render(){
    const { getFieldProps } = this.props.form;
    return (
      <List
        renderHeader={() => '基本设置'}
      >
        <List.Item
          extra={<Switch
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked,
              });
            }}
          />}
        >存储</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch1', {
              initialValue: this.state.checked1,
              valuePropName: 'checked',
              onChange: (val) => {
                console.log(val);
                // Do not `setState` with rc-form
                // this.setState({ checked1: val });
              },
            })}
            onClick={(checked) => {
              // set new value
              this.props.form.setFieldsValue({
                Switch1: checked,
              });
            }}
          />}
        >相机</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch3', {
              initialValue: false,
              valuePropName: 'checked',
            })}
            onClick={(checked) => { console.log(checked); }}
            disabled
          />}
        >读取通话状态和识别码</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch4', {
              initialValue: false,
              valuePropName: 'checked',
            })}
            onClick={(checked) => { console.log(checked); }}
            disabled
          />}
        >位置信息</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch5', {
              initialValue: true,
              valuePropName: 'checked',
            })}
            platform="android"
          />}
        >麦克风</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch6', {
              initialValue: true,
              valuePropName: 'checked',
            })}
            platform="android"
            color="red"
          />}
        >通讯录</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch7', {
              initialValue: true,
              valuePropName: 'checked',
            })}
            platform="ios"
          />}
        >应用内安装其他应用</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch8', {
              initialValue: true,
              valuePropName: 'checked',
            })}
            platform="ios"
            color="red"
          />}
        >悬浮窗</List.Item>
      </List>
    );
  }
}
const WrappedForm = createForm()(My05);



export default WrappedForm;