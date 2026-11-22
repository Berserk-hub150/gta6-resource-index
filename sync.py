import json
from pathlib import Path
here=Path(__file__).parent
entries=json.loads((here/'resources.json').read_text(encoding='utf-8'))
js=here/'app.js'
logic=js.read_text(encoding='utf-8').split('\n',1)[1]
js.write_text('const entries='+json.dumps(entries)+';\n'+logic,encoding='utf-8')
