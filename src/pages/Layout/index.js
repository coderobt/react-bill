import {Outlet} from 'react-router-dom'
import {Button} from 'antd-mobile'
import { useEffect } from 'react'
import {getBillList} from '@/store/modules/billStore'
import {useDispatch} from 'react-redux'

const Layout = ()=>{
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBillList())
  },[dispatch])
  return (
  <div>
    我的Layout
    <Outlet/>
    {/* 测试全局生效样式 */}
    <Button color='primary'>测试全局</Button>
  </div>
  )
}

export default Layout;