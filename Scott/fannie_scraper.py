import requests
import getpass
import itertools
import api_keys

if __name__ == "__main__":
    # user = input("User name: ")
    # pwd = getpass.getpass("Password: ")

    user = api_keys.user
    pwd = api_keys.password

    URL = "https://loanperformancedata.fanniemae.com/lppub/loginForm.html"
    payload = {
        "username": user
        , "password": pwd
        , "agreement": "true"
        , "_agreement": "on"
    }

    session = requests.session()
    session.post(URL, data=payload) #login

    # itertools.product() goes "up to the end of the range" so 2019 is not incl.
    for year, quarter in itertools.product(range(2017,2019), range(1,5)):
        print(year, quarter)
        
        fn = "{}Q{}.zip".format(year,quarter)
        data = {"file":fn}

        response = session.get(
            "https://loanperformancedata.fanniemae.com/lppub/publish"
            , params=data
            , stream=True
            , allow_redirects=False
        )
        length = int(response.headers.get('content-length',None))

        print(response)
        
        if response.ok:
            with open("data/"+fn,"wb") as f:
                total = 0
                CHUNK_SIZE = 1024
                for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
                    if not total%(CHUNK_SIZE*512):                        
                        print(total*1./length)
                    if chunk:
                        f.write(chunk)
                        total += CHUNK_SIZE
        else:
            print(f'not ok! {year}, {quarter}')






