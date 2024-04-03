FROM  alpine:latest
# RUN sudo apt-get update
# RUN sudo apt-get upgrade
RUN  apk --no-cache add nodejs yarn 

WORKDIR /home/app/

COPY yarn.lock /home/app/
COPY package*.json /home/app
COPY tsconfig*.json /home/app

RUN yarn install 

COPY src /home/app

RUN yarn build

EXPOSE 3000

CMD [ "yarn","start:prod" ]