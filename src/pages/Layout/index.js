import {Outlet} from 'react-router-dom'
import {Button} from 'antd-mobile'
const Layout = ()=>{
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