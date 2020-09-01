FROM nginx

ADD ./data/ /data/
RUN rm -fr /etc/nginx/conf.d/
ADD ./etc/nginx/conf.d/ /etc/nginx/conf.d/

VOLUME /data/scenes/TextFiles/