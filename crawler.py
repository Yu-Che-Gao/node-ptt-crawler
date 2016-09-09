import requests
import sys

input=sys.stdin.readline()
payload={
    'from':'/bbs/Gossiping/index'+ str(input).strip() +'.html',
    'yes':'yes'
}

rs=requests.session()
res=rs.post('https://www.ptt.cc/ask/over18', verify=False, data=payload)
res=rs.get('https://www.ptt.cc/bbs/Gossiping/index'+ str(input).strip() +'.html', verify=False)
print res.text.encode('utf-8')