import { useHead } from '@vueuse/head';
import { buildBaseHead } from './siteMeta';
import { unref } from 'vue';

export default function usePageMeta({ title, description, image, url, type = 'website' } = {}) {
  // build base head and override page-specific values
  const headObj = buildBaseHead({ title, description, image, url, type });

  // useHead will merge head entries. Provide a getter so refs are unwrapped at render
  useHead(() => {
    // unref will return the raw value for refs or the value itself for plain strings
    const t = unref(title) || undefined;
    const d = unref(description) || undefined;
    const i = unref(image) || undefined;
    const u = unref(url) || undefined;
    return buildBaseHead({ title: t, description: d, image: i, url: u, type });
  });
}
