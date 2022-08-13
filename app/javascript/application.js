import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"

import "materialize-css/dist/js/materialize"

import "./init_materialize"
import "./src/index.tsx"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


console.log('QWERT')
