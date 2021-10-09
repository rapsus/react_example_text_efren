FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /efren/react_example_text_efren/my-first-app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3030
RUN chown -R node /efren/react_example_text_efren/my-first-app
USER node
CMD ["npm", "start"]
