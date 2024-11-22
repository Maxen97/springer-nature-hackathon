import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataDirectory = path.join(process.cwd(), '/app/public/data');
    
    // Check if directory exists
    try {
      await fs.access(dataDirectory);
    } catch {
      return Response.json({ error: 'Data directory not found' }, { status: 404 });
    }
    
    const fileNames = await fs.readdir(dataDirectory);
    const xmlFiles = fileNames.filter(file => file.endsWith('.xml'));
    
    if (xmlFiles.length === 0) {
      return Response.json({ error: 'No XML files found' }, { status: 404 });
    }
    
    const files = await Promise.all(
      xmlFiles.map(async (file) => {
        const filePath = path.join(dataDirectory, file);
        const content = await fs.readFile(filePath, 'utf8');
        return {
          name: file,
          content: content
        };
      })
    );
    
    return Response.json(files);
    
  } catch (error) {
    console.error('API Error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}