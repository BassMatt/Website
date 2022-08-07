"""
desired call: ./flickrurls.py --latest 5 [--tag seattle] [--size o, b, l, etc]


output:

- https://live.staticflickr.com/65535/52174819538_28642cb3a1_b.jpg /* 4x6pfp */

"""

import flickrapi
import os
import sys



flickr = flickrapi.FlickrAPI(os.getenv("FLICKR_API_KEY"), os.getenv("FLICKR_API_SECRET"), format='parsed-json')

photos = flickr.photos.search(user_id=os.getenv("FLICKR_USER_ID"),
        tag_mode='all', tags=sys.argv[1], extras='url_o,url_l')


for index, photo in enumerate(photos['photos']['photo']):
    print(f"- {photo['url_l']} # {photo['title']} {index}")
