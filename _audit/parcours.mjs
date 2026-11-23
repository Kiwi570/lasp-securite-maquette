/* Parcours propres à LASP : l'outil « Votre dispositif » (accueil) prépare un lien de devis cohérent avec les choix,
   et la demande de devis en trois étapes se préremplit depuis ce lien, se valide et se termine sur l'envoi simulé. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('#dispositif').scrollIntoViewIfNeeded();
    await attendre(900);
    const choisir = (sel) => page.evaluate((s) => { const i = document.querySelector(s); i.checked = true; i.dispatchEvent(new Event('change', { bubbles: true })); }, sel);
    await choisir('[data-dispositif] input[name="site"][value="commerces"]');
    await choisir('[data-dispositif] input[name="priorite"][value="vols"]');
    await attendre(300);
    const etat = await page.evaluate(() => ({
      href: document.querySelector('[data-dispositif-lien]').getAttribute('href'),
      allumes: [...document.querySelectorAll('.dispositif-liste li.allume')].map((li) => li.dataset.prestation),
    }));
    if (!etat.allumes.includes('magasin')) R.echec('dispositif', `« Prévenir les vols » en magasin n'allume pas la prestation Magasin (${etat.allumes.join(', ')})`, { page: '/', taille: '390×844' });
    if (!/site=commerces/.test(etat.href) || !/conseil=[^&#]*magasin/.test(etat.href)) R.echec('dispositif', `lien de devis incohérent : ${etat.href}`, { page: '/', taille: '390×844' });

    await page.goto(BASE + etat.href.replace(/^\//, '/'), { waitUntil: 'load' });
    await attendrePret(page);
    const prerempli = await page.evaluate(() => ({
      site: document.querySelector('.fpe input[name="site"]:checked')?.value,
      prestations: [...document.querySelectorAll('.fpe input[name="prestations"]:checked')].map((i) => i.value),
    }));
    if (prerempli.site !== 'commerces') R.echec('devis', `type de site non prérempli (${prerempli.site})`, { page: '/devis', taille: '390×844' });
    if (!prerempli.prestations.includes('magasin')) R.echec('devis', 'prestation Magasin non cochée depuis le lien', { page: '/devis', taille: '390×844' });

    /* Étape 1 sans ville : une erreur claire, on reste sur l'étape. */
    await page.locator('.fpe [data-suivant]').click();
    await attendre(400);
    const erreur = await page.locator('.fpe .fpe__erreur').count();
    if (!erreur) R.echec('devis', 'aucune erreur affichée quand la ville du site manque', { page: '/devis', taille: '390×844' });
    await page.fill('#d-lieu', 'Lyon 7e');
    await page.locator('.fpe [data-suivant]').click(); await attendre(500);
    await choisir('.fpe input[name="plage"][value="nuit"]');
    await page.locator('.fpe [data-suivant]').click(); await attendre(500);
    await page.fill('#d-nom', 'Camille Martin');
    await page.fill('#d-tel', '04 72 00 00 00');
    await page.fill('#d-email', 'camille@exemple.fr');
    await choisir('.fpe input[name="accord"]');
    await page.locator('.fpe [data-suivant]').click(); await attendre(500);
    const recap = await page.locator('.fpe__recap').innerText();
    if (!/Lyon 7e/.test(recap) || !/Magasin/.test(recap)) R.echec('devis', 'le récapitulatif ne reprend pas la demande', { page: '/devis', taille: '390×844' });
    await page.locator('.fpe [type="submit"]').dblclick();
    await attendre(900);
    const fin = await page.locator('.fpe__fin').isVisible();
    if (!fin) R.echec('devis', "pas d'écran de fin après l'envoi simulé", { page: '/devis', taille: '390×844' });
  } finally { await ctx.close(); }
}
