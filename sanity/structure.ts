import type { StructureResolver } from 'sanity/structure';

export const singletonTypes = new Set(['heroEvent']);

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Treści')
    .items([
      // Pojedynczy wpis wydarzenia - bezpośrednia edycja bez listy duplikatów
      S.listItem()
        .title('Ważne wydarzenie (Sekcja główna)')
        .id('heroEvent')
        .child(
          S.document()
            .schemaType('heroEvent')
            .documentId('heroEvent')
        ),

      S.divider(),

      // Pozostałe dokumenty (np. produkty w sklepie)
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() || '')
      ),
    ]);

