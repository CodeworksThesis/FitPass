import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN ?? '';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? '';
const audience = process.env.REACT_APP_AUTH0_AUDIENCE



ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    audience={audience}
    scope='openid profile email'
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root'),
);



Favorites.findOneAndUpdate({ “favorited.userId”: "updatedFavorite.favorited[0].userId" },
    { $pull: { "favorited.$.gymClassId" : { updatedFavorite.favorited[0].gymClassId } } } )






        if (err) {
            return res.status(404).json({ message: 'Error' });
        }
        return res.status(200).json({
            success: true,
            message: 'success'
        });
    }
);


try {
  const updatedFavorite = await req.body
  const updates = await Favorites.findOne({“favorited.userId”: updatedFavorite.favorited[0].userId})
  if(!updates || Object.keys(updates).length ===0){
  const updateCreated= await Favorites.create(updatedFavorite)
  console.log(updateCreated)
  res.status(201);
  res.send(updateCreated);
  } else{
       updates.favorited.map(item => {
      if(item.userId === updatedFavorite.favorited[0].userId) {
      return item.gymClassId = [...item.gymClassId, ...updatedFavorite.favorited[0].gymClassId]}
      return item })
      updates.save()
    res.send(updates)
    res.status(201)
  }
} catch (e) {
  console.log(e);
  res.status(400).end();
}