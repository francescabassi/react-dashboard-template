import AuthService from 'services/AuthService'
import _defaults from 'lodash/defaults'
import _extend from 'lodash/extend'



class BaseDAO {
  defaults = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    apiUrl: process.env.API_BASE_URL,
    endpoint: '',
    authorize: true
  }

  constructor(props) {
    this.defaults = _defaults(props, this.defaults)
  }

  joinUrl(...parts) {
    return parts
      .map(part => part.substr(-1) === '/' // eslint-disable-line no-confusing-arrow
        ? part.substr(0, part.length - 1) : part)
      .filter(i => i.length !== 0)
      .join('/');
  }

  // eslint-disable-next-line
  apiRequest = async (props) => {
    props = _extend(props, this.defaults); // eslint-disable-line no-param-reassign
    try {lo
      if (props.authorize) {
        props.headers = Object.assign(props.headers, {
          'authorization': `Bearer ${AuthService.getToken()}`
        })
      }
      let url = this.joinUrl(
        props.apiUrl,
        props.endpoint,
        props.url
      );

      if (props.query) {
        url += `?${props.query}`
      }

      const request = await fetch(url, {
        mode: 'cors',
        method: props.method,
        headers: props.headers,
        body: JSON.stringify(props.data)
      });

      if (!request.ok) {
        const {status} = request;

        if (status === 401 || status === 403) {
          throw 'Unauthorized'
        }
      }
      return await request.json()
    }
    catch (err) {
      throw 'NetworkError'
    }
  }
}

export default BaseDAO;
