
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store  from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App/>
  </Provider>


)


// https://dmlxwyvbgetqluvrorpj.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbHh3eXZiZ2V0cWx1dnJvcnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNTc2MzMsImV4cCI6MjA1NjYzMzYzM30.Fy8AP6Jz19ViKu1PB3HkFM1Ih0ti4auNML-TUwB2flY



/*import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dmlxwyvbgetqluvrorpj.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)*/ 
