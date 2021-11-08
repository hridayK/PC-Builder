from pcpartpicker import api

api = api.API()

arr = ['wireless-network-card', 'case-fan', 'cpu', 'cpu-cooler', 'headphones', 'motherboard', 'monitor', 'internal-hard-drive', 'external-hard-drive', 'ups', 'fan-controller', 'case', 'keyboard', 'mouse', 'wired-network-card', 'sound-card', 'video-card', 'speakers', 'optical-drive', 'power-supply', 'thermal-paste', 'memory']

for x in arr:
    data = api.retrieve(x).to_json()
    file = open(x+".json","w")
    file.write(data)
