import { createApp } from 'vue'
import { browserAgent, vuePersistentComponent } from '@knowlearning/agents'
import component from './index.vue'
import './index.css'

window.Agent = browserAgent()

const scope = window.location.pathname.slice(1)
const persistentComponent = vuePersistentComponent(component, scope)

createApp(persistentComponent)
  .mount('body')
