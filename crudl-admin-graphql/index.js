import options from './admin/options'
import admin from './admin/admin'
import SplitDateTimeField from './admin/fields/SplitDateTimeField'

crudl.addField('SplitDateTime', SplitDateTimeField)
crudl.render(admin, options)
