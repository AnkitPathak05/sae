import Home from '../components/Home/Home'
import Contact from '../components/contact/Contact'
import About from '../components/About/About'
import Events from '../components/Events/Events'
import Blogs from '../components/Blogs/Blogs'
import Projects from '../components/Projects/Projects'


export const routes=[
    {path:'/', element :<Home/>},
    {path:'contact', element :<Contact/>},
    {path:'about', element :<About/>},
    {path:'events', element :<Events/>},
    {path:'blogs', element :<Blogs/>},
    {path:'projects', element :<Projects/>},

]

