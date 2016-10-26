## Simple Example of sharing cookies across subdomains and mimicking subdomains locally

This project has one simple api, with two routes, each of which is used for display data by one static page. The static pages share cookies by setting them on a shared root domain, ".mydomain.com". This is a useful way to share authentication or other user data across subdomains.

#### To Run (each in a new tab):
```
node api/server.js
node staticSubdomainOne/server.js
node staticSubdomainTwo/server.js
```
Edit your /etc/hosts file to alias localhost to mydomain.com, see the file sample_host_file for an example.

This allows you to mimic subdomains locally, because each distinct port counts as a subdomain of the root domain mydomain.com. Simply setting multiple ports on localhost won't work because a root domain needs to have at least two parts. It also won't work to mimic more than one layer of subdomains, like http://web.mydomain.com:8000 because you can't set an alias by port in your hosts file.

See the pages in action by opening up http://mydomain.com:8001 and http://mydomain.com:8002. Setting or changing a cookie value on either one will be shared between the two. This cookie will also be sent with each api request as a header, because it's on the same root domain. In production, it may be a good idea to set cookies for web use on a separate path so they don't impact the size of api calls.
