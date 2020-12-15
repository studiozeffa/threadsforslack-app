import type { NowRequest, NowResponse } from '@vercel/node';

enum SlackEventType {
  UrlVerification = 'url_verification',
}

interface BaseSlackEvent<T extends SlackEventType> {
  type: T;
}

interface UrlVerificationEvent
  extends BaseSlackEvent<SlackEventType.UrlVerification> {
  challenge: string;
}

type SlackEvent = UrlVerificationEvent;

export default (request: NowRequest, response: NowResponse) => {
  const { method } = request;

  if (method === 'POST') {
    const event = request.body as SlackEvent | undefined;
    switch (event?.type) {
      case 'url_verification':
        return response.json({
          challenge: event.challenge,
        });
    }
  }

  // No match.
  response.status(404).send('Not Found');
};
