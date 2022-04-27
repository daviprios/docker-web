import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

import Layout from '$components/Layout'

import Home from '$pages/Home'

const paths = {
  home: '/'
}

const Routes = () => {
  return (
    <BrowserRouter basename='/front/'>
      <Switch>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='*' element={<p>Not Found</p>}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export { paths }
export default Routes