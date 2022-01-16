import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import ReloadOnChange from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [
    ReloadOnChange(['config/routes.rb', 'app/views/**/*']),
    RubyPlugin(),
  ],
});
