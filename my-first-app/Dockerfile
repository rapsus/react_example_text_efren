FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /react_example_text_efren
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3030
RUN chown -R node /react_example_text_efren
USER node
CMD ["npm", "start"]
