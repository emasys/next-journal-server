// @flow
import type { $Request } from 'express';
import { Posts } from '../../models';

class Memos {
  static postMemo(req: $Request, res: $Request): Function {
    const request = req.body;
    return Posts.create(request)
      .then((response: Object) => {
        res.json({ message: response });
      })
      .catch((error: Object) => {
        res.status(409).json({ message: error.message });
      });
  }

  static getMemos(req: $Request, res: $Request): Function {
    return Posts.findAndCountAll({}).then((result: Object) => {
      res.json({ message: result.rows, meta: result.count });
    });
  }

  static getMemo(req: $Request, res: $Request): Function {
    const {
      params: { id },
    } = req;
    return Posts.findById(id).then(
      (result: Object): Function => {
        if (!result) {
          return res.status(404).json({ message: 'Post not found' });
        }
        return res.json({ message: result });
      },
    );
  }
}

export default Memos;
