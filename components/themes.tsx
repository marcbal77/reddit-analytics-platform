"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Theme {
  id: number;
  name: string;
  count: number;
}

export function Themes({ themes: initialThemes }: { themes: Theme[] }) {
  const [themes, setThemes] = useState(initialThemes);
  const [newTheme, setNewTheme] = useState('');

  const addTheme = () => {
    if (newTheme && !themes.some(theme => theme.name.toLowerCase() === newTheme.toLowerCase())) {
      const newThemeObj = {
        id: themes.length + 1,
        name: newTheme,
        count: 0
      };
      setThemes([...themes, newThemeObj]);
      setNewTheme('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Themes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {themes.map((theme) => (
          <Card key={theme.id}>
            <CardHeader>
              <CardTitle>{theme.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Count: {theme.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Add new theme"
          value={newTheme}
          onChange={(e) => setNewTheme(e.target.value)}
        />
        <Button onClick={addTheme}>
          <Plus className="mr-2 h-4 w-4" /> Add Theme
        </Button>
      </div>
    </div>
  );
}