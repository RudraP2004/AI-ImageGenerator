import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.studio.nebius.com/v1/',
  apiKey: process.env.NEBIUS_API_KEY,
});


export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }


    const response = await client.images.generate({
      "model": "black-forest-labs/flux-dev",
      "response_format": "b64_json",
      "extra_body": {
          "response_extension": "png",
          "width": 1024,
          "height": 1024,
          "num_inference_steps": 28,
          "negative_prompt": "",
          "seed": -1
      },
      "prompt": prompt
  })

  console.log("Image Generated")
  
    return NextResponse.json({ imageUrl: response.data[0].b64_json });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}