import time

import tornado.ioloop
import tornado.web
from tornado import gen


class MainHandler(tornado.web.RequestHandler):
    async def get(self, second):
        await gen.sleep(int(second))
        self.write(f'you slept {second} seconds')

def make_app():
    return tornado.web.Application([
        (r"/sleep/([^/]+)?", MainHandler),
    ])


if __name__ == "__main__":
    app = make_app()
    app.listen(8080)
    tornado.ioloop.IOLoop.current().start()
