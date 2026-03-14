-- WBS CMS Database Import Script
-- Generated: 2026-03-13T20:34:28.694Z
-- Articles: 203
-- Images: 1258
-- PDFs: 37

BEGIN;

-- Insert categories
INSERT INTO categories (slug, name_pl, name_de, name_en, color, icon) VALUES
('aktualnosci', 'Aktualności', 'Aktuelles', 'News', '#3B82F6', 'newspaper'),
('wydarzenia', 'Wydarzenia', 'Veranstaltungen', 'Events', '#8B5CF6', 'calendar'),
('sukcesy', 'Sukcesy', 'Erfolge', 'Achievements', '#F59E0B', 'trophy'),
('ogloszenia', 'Ogłoszenia', 'Mitteilungen', 'Announcements', '#10B981', 'megaphone'),
('projekty', 'Projekty', 'Projekte', 'Projects', '#EC4899', 'folder')
ON CONFLICT (slug) DO NOTHING;


-- Insert articles
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-1',
    'zajecia-online-w-wbs-3627',
    'Zajęcia ONLINE w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14208/800x600_online_unterricht_weiter1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Rodzice, <br />
WBS, tak jak wszystkie inne szkoły w Polsce pozostaje zamknięta do 26.04.2020. Zajęcia nadal odbywają się w trybie zdalnym.<br />
<br />
O zmianach będziemy Państwa informować na bieżąco.<br />
<br />
Dziękujemy za wspołpracę.<br />
<br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Zajęcia ONLINE w WBS',
    '',
    'https://wbs.pl/zajecia_online_w_wbs-3627.html',
    '2026-03-13T20:34:28.683Z',
    '2026-03-13T20:34:28.689Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-2',
    'karnawal-w-szkole-podstawowej-wbs-3886',
    'Karnawał w Szkole Podstawowej WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15367/800x600_21-02_1c-karnawal-6-309.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				📷 Marek Kępiński<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15368/21-02_1a-karnawal-44-810.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15368/800x600_21-02_1a-karnawal-44-810.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15369/21-02_1a-karnawal-5-1601.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15369/800x600_21-02_1a-karnawal-5-1601.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15370/21-02_1a-karnawal-106-928.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15370/800x600_21-02_1a-karnawal-106-928.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15371/21-02_1a-karnawal-109-932.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15371/800x600_21-02_1a-karnawal-109-932.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15372/21-02_2a-karnawal-2-12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15372/800x600_21-02_2a-karnawal-2-12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15373/21-02_2a-karnawal-24-2011.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15373/800x600_21-02_2a-karnawal-24-2011.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15374/21-02_2a-karnawal-85-130.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15374/800x600_21-02_2a-karnawal-85-130.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15375/21-02_2a-karnawal-155-2250.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15375/800x600_21-02_2a-karnawal-155-2250.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15376/21-02_2a-karnawal-167-248.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15376/800x600_21-02_2a-karnawal-167-248.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15377/21-02_2a-karnawal-192-298.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15377/800x600_21-02_2a-karnawal-192-298.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15378/21-02_2c-karnawal-24-1581.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15378/800x600_21-02_2c-karnawal-24-1581.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15379/21-02_2c-karnawal-38-509.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15379/800x600_21-02_2c-karnawal-38-509.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15380/21-02_2c-karnawal-50-532.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15380/800x600_21-02_2c-karnawal-50-532.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15381/21-02_3a-karnawal-10-1745.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15381/800x600_21-02_3a-karnawal-10-1745.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15382/21-02_3a-karnawal-54-1243.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15382/800x600_21-02_3a-karnawal-54-1243.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15383/21-02_3c-karnawal-8-185.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15383/800x600_21-02_3c-karnawal-8-185.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15384/21-02_3c-karnawal-111-1151.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15384/800x600_21-02_3c-karnawal-111-1151.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15385/21-02_1c-karnawal-16-336.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15385/800x600_21-02_1c-karnawal-16-336.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15386/21-02_2a-karnawal-7-2232.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15386/800x600_21-02_2a-karnawal-7-2232.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15387/21-02_2a-karnawal-8-2233.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15387/800x600_21-02_2a-karnawal-8-2233.jpg);">
			</a>
		</div>
		
				<div class="',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Karnawał w Szkole Podstawowej WBS',
    '',
    'https://wbs.pl/karnawal_w_szkole_podstawowej_wbs-3886.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-3',
    'konkurs-europazjednoczona-w-roznorodnosci-3967',
    'Konkurs - Europa-zjednoczona w różnorodności',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15738/800x600_europa5.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: center;"><span style="color: rgb(0, 0, 128);"><span style="font-size: larger;"><strong>Europejski konkurs przewodniczących z zagranicznych szk&oacute;ł niemieckich z region&oacute;w p&oacute;lnocno-wschodniego i środkowo-wschodniego</strong></span></span><span style="font-size: larger;"><span style="color: rgb(51, 102, 255);"><strong> </strong></span></span></div>
<br />
<br />
Drodzy Uczniowie,<br />
<br />
Przewodniczący niemieckich szk&oacute;ł z region&oacute;w p&oacute;lnocno-wschodniego i środkowo-wschodniego zainicjowali konkurs dla uczni&oacute;w <strong>klas 5-12</strong>. <br />
<strong>Tematem tego konkursu jest &ldquo;Europa - zjednoczona w r&oacute;żnorodności&rdquo;. </strong><br />
Nie ma specyfikacji dotyczących formatu pracy, może być to:<br />
<ul>
    <li>wypracowanie</li>
    <li>wiersz</li>
    <li>rap</li>
    <li>piosenka</li>
    <li>teatr</li>
    <li>komiks</li>
    <li>filmik&nbsp;</li>
    <li>plakat</li>
</ul>
<br />
Można pracować samodzielnie, bądź w grupie. <br />
<br />
<strong>Tematem pracy mogą być wartości europejskie takie jak wolność, demokracja, r&oacute;wność, tolerancja, prawa człowieka czy (międzynarodowa) wsp&oacute;łpraca, itp.</strong><br />
<br />
Data rozpoczęcia konkursu została wyznaczona na<span style="background-color: rgb(255, 255, 153);"><strong> 8 maja</strong></span> tego roku. Prace należy przesłać do <span style="background-color: rgb(255, 255, 153);"><strong>28 maja</strong></span> do międzynarodowego jury, kt&oacute;re 4 czerwca ogłosi zwycięzc&oacute;w. W dniu 10 czerwca odbędzie się ceremonia online wręczenia nagr&oacute;d i przedstawienie projekt&oacute;w zwycięzc&oacute;w. Zwycięzca dostanie nagrodę, kt&oacute;ra na ten czas pozostaje tajemnicą.<br />
<br />
Prace powinny być oczywiście przygotowane w <strong>języku niemieckim.</strong><br />
<br />
<strong>Zachęcamy do udziału w konkursie europejskim!</strong><br />
<br />
<u>W razie pytań prosimy zgłosić się do</u>: <br />
Helena Ciszewska, h.ciszewska@ewbs.pl <br />
Kasia Osokin, k.osokin@ewbs.pl <br />
Alex Morawietz, a.morawietz@ewbs.pl <br />
Maxi Morawietz, m.morawietz@ewbs.pl oraz Pan Pommerening, a.pommerening@ewsbs.pl<br />
<br />
<br />
Organizatorami są przewodniczący szk&oacute;ł: <br />
<br />
Deutsche Schule Belgrad (Serbia)<br />
Deutsche Schule Bratislava (Słowacja)<br />
Deutsche Schule Budapest (Węgry)<br />
Deutsche Schule Helsinki (Finlandia)<br />
Deutsche Schule Kiew (Ukraina)<br />
Deutsche Schule St. Petri Kopenhagen (Dania)<br />
Deutsche Schule Moskau (Federacja Rosyjska)<br />
Deutsch-Norwegische Schule Oslo (Norwegia)<br />
Deutsche Schule St. Petersburg (Federacja Rosyjska)<br />
Deutsche Schule Prag (Czechy)<br />
Deutsche Auslandsschule Sofia (Bułgaria)<br />
Deutsche Schule Stockholm (Szwecja)<br />
Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule Warschau (Polska)<br />
Deutsche Internationale Schule Zagreb (Chorwacja)
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Europawettbewerb DAS
				</td>
				<td>
					<a href="pub/cms/files/1589/europawettbwerb_das.pdf" title="Europawettbewerb DAS" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Konkurs - Europa-zjednoczona w różnorodności',
    '',
    'https://wbs.pl/_konkurs__europazjednoczona_w_roznorodnosci-3967.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-4',
    'koronawirus-iv-etap-znoszenia-ograniczen-3672',
    'Koronawirus. IV etap znoszenia ograniczeń.',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14368/800x600_4_etapa.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<strong>27.05</strong> premier RP Mateusz Morawiecki wraz z ministrem zdrowia Łukaszem Szumowskim i ministrem kultury Piotrem Glińskim ogłosili czwarty etap znoszenia obostrzeń związanych z pandemią koronawirusa w Polsce.<br />
<br />
<strong>Obowiązek noszenia maseczki lub bezpieczna odległość</strong><br />
<br />
Od <strong>30 maja </strong>w Polsce nie będzie już konieczne zasłanianie ust i nosa na zewnątrz, pod warunkiem, że zostanie zachowana bezpieczna odległość (2 metry) od innych os&oacute;b. Konkretnie oznacza to, że spacer, jazda na rowerze lub po prostu poruszanie się w miejscach publicznych, takich jak parki, plaże lub parkingi, jest generalnie możliwe bez maseczki, ale w bezpiecznej odległości.<br />
Jeśli nie można zachować bezpiecznego odstępu, należy zakryć usta i nos (np. maseczką, szalikiem, szmatką itp.).<br />
<br />
<strong>Obowiązek noszenia maseczek nadal obowiązuje w:</strong><br />
<br />
&bull;	publicznych środkach transportu,<br />
&bull;	sklepach,<br />
&bull;	kinach i teatrach,<br />
&bull;	salonach masażu i tatuażu, <br />
&bull;	kościołach,<br />
&bull;	urzędach.<br />
<br />
Inne miejsca i lokalizacje, w kt&oacute;rych nadal obowiązuje obowiązek stosowania maseczek, są określane przez Gł&oacute;wny Inspektorat Sanitarny (GIS).<br />
<strong><br />
Ograniczenia dotyczące liczby klient&oacute;w w sklepach, na rynkach, w urzędach pocztowych i restauracjach</strong><br />
<br />
Od <strong>30 maja </strong>zniesione zostaną osobiste ograniczenia w sektorze detalicznym i gastronomicznym. W związku z tym maksymalna liczba klient&oacute;w, obliczona na podstawie powierzchni sklepu lub nieruchomości, nie będzie już obowiązywać.<br />
W restauracjach i innych punktach gastronomicznych nadal obowiązują zasady higieny i bezpieczeństwa, takie jak odpowiednie odległości między stołami a dezynfekcją lub noszenie rękawic jednorazowych. <br />
<br />
<strong>Kultura, sport, gabinety masażu i targi</strong><br />
<br />
Od dnia <strong>6 czerwca</strong> następujące instytucje i przedmioty mogą wznowić działalność zgodnie z odpowiednimi środkami bezpieczeństwa:<br />
- kina, teatry, opery, itp.<br />
- baseny, centra fitness, sale gimnastyczne i parki rozrywki,<br />
- sauny, solaria, gabinety masażu i studia tatuażu.<br />
Od tego dnia możliwa jest r&oacute;wnież organizacja targ&oacute;w, wystaw i kongres&oacute;w.<br />
<br />
Szczeg&oacute;ły można znaleźć na stronie: https://www.gov.pl/web/premier/nowe-zasady-zaslaniania-nosa-i-ust-otwarte-kina-i-silownie--wchodzimy-w-kolejny-etap-odmrazania <br />
<br />
Będziemy Państwa  informować na bieżąco o nowych wytycznych związanych z koronawirusem.<br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Koronawirus. IV etap znoszenia ograniczeń.',
    '',
    'https://wbs.pl/koronawirus_iv_etap_znoszenia_ograniczen-3672.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-5',
    'bieg-sponsorowanywyniki-3366',
    'Bieg sponsorowany-wyniki',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13115/800x600_dsc00594a.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<strong>19 września</strong> odbył się w naszej szkole bieg sponsorowany. W wydarzeniu tym, zorganizowanym wsp&oacute;lnie z Rotary Club Warszawa Goethe wzięli udział uczniowie wszystkich klas.<br />
&bdquo;Pomagamy Azji i Afryce&rdquo;-to myśl przewodnia tego biegu, jego celem zaś zbi&oacute;rka funduszy na zakup szczepionek przeciwko polio.<br />
Udało nam się zebrać <strong>18 387 zł.</strong> 75 % tej kwoty przeznaczymy na zakup szczepionek dla dzieci z Azji i Afryki. Pozostała część zostanie przeznaczona na projekty szkolne, o kt&oacute;rych zdecyduje samorząd uczniowski.<br />
<u><br />
Oto wyniki:<br />
</u><br />
1. Klasa 9 A &ndash; średnia ilość okrążeń 25,3 <br />
2. Klasa 8 C &ndash; średnia ilość okrążeń 24,9<br />
3. Klasa 1 C&ndash; średnia ilość okrążeń 24,5<br />
<br />
<img src="/pub/uploader/images/bieg www_1.jpg" alt="bieg www_1.jpg" width="486" height="662" /><br />
<br />
W tym biegu wszyscy są zwycięzcami, gdyż biegliśmy w słusznej sprawie!<br />
<strong><br />
Serdecznie dziękujemy organizatorom i uczestnikom za udział w tym wydarzeniu.</strong><br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13116/dsc00592a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13116/800x600_dsc00592a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13117/dsc00590a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13117/800x600_dsc00590a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13118/dsc00604a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13118/800x600_dsc00604a.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Bieg sponsorowany-wyniki',
    '',
    'https://wbs.pl/bieg_sponsorowanywyniki-3366.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-6',
    'kolejna-radiowa-przygoda-naszych-uczniow-5205',
    'Kolejna radiowa przygoda naszych uczniów',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/26445/800x600_1.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				&nbsp;W poniedziałek 02.02 wybrana grupa uczni&oacute;w ponownie miała okazję odwiedzić Polskie Radio. Wyjazd odbył się na zaproszenie naszego byłego ucznia &ndash; Joachima Ciecierskiego, za co jesteśmy ogromnie wdzięczni.<br />
<br />
Podczas wizyty uczniowie nie tylko poszerzyli swoją wiedzę, ale też poznali kulisy pracy w radiu i zobaczyli, jak wszystko wygląda &bdquo;od kuchni&rdquo;. To była bardzo cenna i inspirująca lekcja, pełna nowych doświadczeń.<br />
<br />
Dziękujemy za zaproszenie, poświęcony czas i możliwość kolejnego spotkania. Takie doświadczenia zostają z nami na długo i motywują do dalszego działania! 🎙️✨
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/26446/image00001.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26446/800x600_image00001.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26447/image00004.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26447/800x600_image00004.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26448/image00008.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26448/800x600_image00008.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26449/image00009.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26449/800x600_image00009.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26450/image00012.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26450/800x600_image00012.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26451/image00013.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26451/800x600_image00013.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26452/image00014.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26452/800x600_image00014.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26453/image00016.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26453/800x600_image00016.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26454/image00018.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26454/800x600_image00018.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26455/image00020.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26455/800x600_image00020.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26456/image00021.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26456/800x600_image00021.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26457/image00023.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26457/800x600_image00023.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26458/image00025.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26458/800x600_image00025.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26459/image00026.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26459/800x600_image00026.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26460/image00027.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26460/800x600_image00027.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26461/image00030.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26461/800x600_image00030.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26462/image00033.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26462/800x600_image00033.jpeg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Kolejna radiowa przygoda naszych uczniów',
    '',
    'https://wbs.pl/kolejna_radiowa_przygoda_naszych_uczniow-5205.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-7',
    'gymnastikshowpokaz-jazdy-na-monocyklachvideo-3536',
    'Gymnastikshow-Pokaz jazdy na monocyklach-video',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14008/800x600_gymnastikshow-20-483.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: center;"><iframe src="https://www.youtube.com/embed/JX-sjhPiEgU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe></div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Gymnastikshow-Pokaz jazdy na monocyklach-video',
    '',
    'https://wbs.pl/gymnastikshowpokaz_jazdy_na_monocyklachvideo-3536.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-8',
    'spotkanie-z-pisarzem-grzegorzem-kasdepke-4006',
    'Spotkanie z pisarzem Grzegorzem Kasdepke',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15918/800x600_untitled-172.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Czy jest Pan celebrytą? Czy lepiej jest być grzecznym, czy niegrzecznym? Czy napisał Pan książkę, kt&oacute;ra się Panu nie podoba?<br />
To jedne z wielu  pytań, jakie w zeszłym tygodniu nasi uczniowie zadali Grzegorzowi Kasdepke. <br />
Grzegorz Kasdepke jest popularnym wśr&oacute;d młodych czytelnik&oacute;w autorem książek dla dzieci i młodzieży. <br />
Prawie wszyscy znają &quot;Detektywa Pozytywkę&quot;, &quot;Bezu-bezu i sp&oacute;łkę&quot;, &quot;Mruczando na trzy rodziny i jedną kamienicę&quot; czy &quot;Kacperiadę&quot;. Dziękujemy za wizytę i rozmowy o literaturze i nie tylko 🙃.<br />
Z niecierpliwością czekamy na kolejne spotkanie. <br />
<br />
📸 Marek Kępiński Photography<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15919/untitled-208.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15919/800x600_untitled-208.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15920/untitled-133.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15920/800x600_untitled-133.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15921/untitled-88.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15921/800x600_untitled-88.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15922/21-06_g-kasdepke-631.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15922/800x600_21-06_g-kasdepke-631.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15923/21-06_g-kasdepke-504.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15923/800x600_21-06_g-kasdepke-504.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15924/21-06_g-kasdepke-501.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15924/800x600_21-06_g-kasdepke-501.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15925/21-06_g-kasdepke-437.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15925/800x600_21-06_g-kasdepke-437.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Spotkanie z pisarzem Grzegorzem Kasdepke',
    '',
    'https://wbs.pl/spotkanie_z_pisarzem_grzegorzem_kasdepke-4006.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-9',
    'krippenspiel-kl-3c-3504',
    'Krippenspiel Kl. 3c',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13786/800x600_20191219_102022_resized.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13787/20191219_102016_resized.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13787/800x600_20191219_102016_resized.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13788/20191219_102110_resized.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13788/800x600_20191219_102110_resized.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13789/20191219_102420_resized.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13789/800x600_20191219_102420_resized.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13790/20191219_102528_resized.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13790/800x600_20191219_102528_resized.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13791/20191219_102711_resized.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13791/800x600_20191219_102711_resized.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13792/20191219_102829_resized.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13792/800x600_20191219_102829_resized.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13793/20191219_102957_resized.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13793/800x600_20191219_102957_resized.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Krippenspiel Kl. 3c',
    '',
    'https://wbs.pl/krippenspiel_kl_3c-3504.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-10',
    'gymnastikshow-kl-16-3534',
    'Gymnastikshow (kl. 1-6)',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13950/800x600_gymnastikshow-20-872.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Tradycją naszej szkoły jest organizacja pokaz&oacute;w gimnastycznych.<br />
Co dwa lata uczniowie klas 1- 6 mają okazję zaprezentować swoje sportowe zdolności.<br />
24.01.2020 roku w hali sportowej najmłodsi zawodnicy, przy dużym aplauzie Rodzic&oacute;w, rozpoczęli sw&oacute;j pierwszy, poważny występ. Z każdą wyższą klasą, uczniowie wykonywali coraz trudniejsze ewolucje.<br />
Zawodnicy klas 5 i 6  rozbawili nas swoimi uroczymi piramidami lub wprowadzili w zachwyt swoimi tanecznymi układami. Na koniec wszyscy otrzymali medale, zaprojektowane przez uczennice 9c- Helenę Swirtun.<br />
Pokaz zakończył się występem dzieci  z k&oacute;łka cyrkowego.<br />
<br />
Wspaniałym zawodnikom i publiczności  serdecznie dziękujemy i zapraszamy za dwa lata!<br />
nauczyciele wychowania fizycznego<br />
<br />
📷 Zdjęcia: Marek Kępiński<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13951/gymnastikshow-20-730.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13951/800x600_gymnastikshow-20-730.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13952/gymnastikshow-20-92.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13952/800x600_gymnastikshow-20-92.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13953/gymnastikshow-20-172.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13953/800x600_gymnastikshow-20-172.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13954/gymnastikshow-20-178.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13954/800x600_gymnastikshow-20-178.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13955/gymnastikshow-20-394.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13955/800x600_gymnastikshow-20-394.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13956/gymnastikshow-20-501.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13956/800x600_gymnastikshow-20-501.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13957/gymnastikshow-20-670.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13957/800x600_gymnastikshow-20-670.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13958/gymnastikshow-20-683.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13958/800x600_gymnastikshow-20-683.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13959/gymnastikshow-20-731.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13959/800x600_gymnastikshow-20-731.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13960/gymnastikshow-20-923.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13960/800x600_gymnastikshow-20-923.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13961/gymnastikshow-20-120.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13961/800x600_gymnastikshow-20-120.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13962/gymnastikshow-20-144.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13962/800x600_gymnastikshow-20-144.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13963/gymnastikshow-20-349.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13963/800x600_gymnastikshow-20-349.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13964/gymnastikshow-20-52.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13964/800x600_gymnastikshow-20-52.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13965/gymnastikshow-20-96.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13965/800x600_gymnastikshow-20-96.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13966/gymnastikshow-20-632.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13966/800x600_gymnastikshow-20-632.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13967/gymnastikshow-20-746.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13967/800x600_gymnastikshow-20-746.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Gymnastikshow (kl. 1-6)',
    '',
    'https://wbs.pl/gymnastikshow_kl_16-3534.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-11',
    'konkurs-na-logo-campusu-im-willyego-brandta-3363',
    'Konkurs na logo Campusu im. Willy''ego Brandta',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13072/800x600_des_willy-brandt-campus2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice,<br />
<br />
Willy&ndash;Brand-Campus to miejsce spotkań i  dialogu. Miejsce, w kt&oacute;rym od najmłodszych lat rozwijamy pasje, w tym r&oacute;wnież muzyczne i sportowe. Deutscher Kindergarten, Polsko-Niemiecka Szkoła Spotkań i Dialogu, Akademia Piłkarska i  Akademia Muzyczna to jednostki budujące Campus. Stanowią  one  jedną, wyjątkową całość i jako całość chcielibyśmy by było postrzegane. W ten spos&oacute;b zrodziła się idea wsp&oacute;lnego, łączącego poszczeg&oacute;lne jednostki <strong>logo Campusu</strong>. <br />
<strong>Niniejszym ogłaszamy rodzinny konkurs na przedstawienie graficzne logo Campusu.</strong> Jego celem jest stworzenie w rodzinnym gronie znaku charakterystycznego dla naszego Campusu i łączącego elementy poszczeg&oacute;lnych jednostek. <strong>Do wygrania weekend dla całej rodziny w hotelu Bonifacio, w kt&oacute;rym spędzicie Państwo na pewno niezapomniane chwile.</strong><br />
<br />
Szczeg&oacute;ły i regulamin w załączniku.<br />
<strong><br />
Życzymy wspaniałych projekt&oacute;w!<br />
<br />
</strong><br />
Czas trwania: <strong>07.10.19-22.11.19</strong><br />
Termin oddawania prac:<strong> 22.11.19<br />
</strong>Miejsce oddawania prac: <strong>sekretariat WBS&nbsp;(7:30-15:30)<br />
</strong><br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Plakat
				</td>
				<td>
					<a href="pub/cms/files/1161/plakat_logo_campus.png" title="Plakat" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Zgoda na udział w konkursie
				</td>
				<td>
					<a href="pub/cms/files/1163/zgoda_-_logo_campus_wbs.pdf" title="Zgoda na udział w konkursie" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Regulamin Logo Campusu
				</td>
				<td>
					<a href="pub/cms/files/1169/regulamin_logo_campus.pdf" title="Regulamin Logo Campusu" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Konkurs na logo Campusu im. Willy''ego Brandta',
    '',
    'https://wbs.pl/konkurs_na_logo_campusu_im_willyego_brandta-3363.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-12',
    'sukces-naszych-uczniow-w-mistrzostwach-wilanowa-w-tenisie-stolowym-5194',
    '🥈 Sukces naszych uczniów w Mistrzostwach Wilanowa w tenisie stołowym',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/25990/800x600_2.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				14 stycznia odbyły się Mistrzostwa Wilanowa w tenisie stołowym w ramach Warszawskiej Olimpiady Młodzieży. <br />
<br />
Staś i Tymek z klasy 7c wywalczyli znakomite 2. miejsce, przywożąc do szkoły puchar. R<br />
ywalizacja była niezwykle zacięta i trwała do ostatnich piłek &ndash; zwycięstwo wymknęło się dopiero w dogrywce. <br />
<br />
Jesteśmy przekonani, że za rok chłopaki sięgną po najwyższe trofeum. <br />
Włożyli ogrom pracy w przygotowania, a ich gra stała na bardzo wysokim poziomie.
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/25991/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25991/800x600_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25992/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25992/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25993/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25993/800x600_3.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    '🥈 Sukces naszych uczniów w Mistrzostwach Wilanowa w tenisie stołowym',
    '',
    'https://wbs.pl/__sukces_naszych_uczniow_w_mistrzostwach_wilanowa_w_tenisie_stolowym-5194.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-13',
    'wspieramy-akcje-sloiki-z-wilanowa-dla-frania-3435',
    'Wspieramy akcję "Słoiki z Wilanowa dla Frania"',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13401/800x600_www1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice,<br />
Tradycją staje się nasze coroczne wsparcie akcji charytatywnej &bdquo;Słoiki z Wilanowa&rdquo;. W tym roku będziemy zbierać pieniądze na rzecz  5-letniego Frania chorego na guza m&oacute;zgu (DIPG). Jedyną nadzieją w skutecznej walce z chorobą jest kosztowne leczenie eksperymentalne. Cały Wilan&oacute;w zaangażował się w zbi&oacute;rkę funduszy na terapię Frania, w tym r&oacute;wnież Campus im. Willy&rsquo;ego Brandta.<br />
Przy Info Poincie znajduje się karton, w kt&oacute;rym można zostawiać przygotowane przez siebie słoiki (np. z przetworami, ozdobione przez dzieci). Zostaną one przekazane na kiermasz <strong>&bdquo;Słoiki z Wilanowa dla Frania&rdquo; do Szkoły Podstawowej nr 358</strong>, podczas kt&oacute;rego będzie je można nabyć poprzez zasilenie puszki z fundacji &bdquo;Znajdź Pomoc&rdquo;. <br />
Finał akcji &bdquo;Słoiki z Wilanowa dla Frania&rdquo; odbędzie się w dniu <strong>23 listopada 2019</strong> roku w godzinach <strong>11.00-14.00</strong> na terenie  <strong>Szkoły Podstawowej nr 358 w Warszawie przy ul. Św. U. Led&oacute;chowskiej 10.</strong> <br />
W programie m. in. atrakcje przygotowane przez nauczycieli i lokalną społeczność, niespodzianki kulinarne wykonane przez dzieci i rodzic&oacute;w,  licytacje dar&oacute;w przekazanych przez znane osobistości oraz koncerty w wykonaniu uczennic naszej szkoły i Akademii Muzycznej WBS. <br />
<br />
W imieniu Organizator&oacute;w zapraszamy Państwa do wsparcia Franka. Przyjdźcie z całymi rodzinami, z sąsiadami. Zaproście swoich przyjaci&oacute;ł. Bądźmy wszyscy Razem. Nie raz pokazaliśmy, że z frekwencją i zaangażowaniem w sprawy ważne jesteśmy wzorem dla całej Polski. Franek bardzo nas potrzebuje.  <br />
<br />
Na leczenie Frania zostanie też przeznaczona część pieniędzy ze sprzedaży wypiek&oacute;w podczas <strong>pochodu Św. Marcina oraz bazaru adwentowego.</strong> Na naszym kiermaszu adwentowym (<strong>sobota, 7 grudnia</strong>) będziemy r&oacute;wnież gościć wolontariuszy z puszkami, gdyż zbi&oacute;rka trwać będzie dop&oacute;ki nie uzbieramy całej kwoty potrzebnej na leczenie.<br />
<br />
<u>Liczymy na Państwa obecność  na tych wydarzeniach i wielkie serca!</u><br />
<br />
Zapraszamy do śledzenia strony www.facebook.com/sloikizwilanowa/ tam na bieżąco pojawiają się informacje o postępach akcji i osobistościach kt&oacute;re włączają się w pomoc.<br />
<br />
W załączniku więcej informacji o chorobie Frania oraz akcji &bdquo;Słoiki z Wilanowa&rdquo;.<br />
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Franek Popek-ulotka
				</td>
				<td>
					<a href="pub/cms/files/1233/franek_popek_-_ulotka.pdf" title="Franek Popek-ulotka" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					O akcji charytatywnej "Słoiki z Wilanowa dla Frania"
				</td>
				<td>
					<a href="pub/cms/files/1234/zalacznik_bez_tytulu_00155.pdf" title="O akcji charytatywnej "Słoiki z Wilanowa dla Frania"" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					List od Organizatora 
				</td>
				<td>
					<a href="pub/cms/files/1235/wbs_list_od_organizatora.pdf" title="List od Organizatora " target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wspieramy akcję "Słoiki z Wilanowa dla Frania"',
    '',
    'https://wbs.pl/wspieramy_akcje_sloiki_z_wilanowa_dla_frania-3435.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-14',
    'flohmarkt-2880',
    'Flohmarkt',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/10194/800x600_dsc_3429.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				Dziękujemy za udział w Pchlim Targu.<br />
Poza miłą atmosferą i myślimy,że udaną imprezą, zrobiliśmy wsp&oacute;lnie coś dobrego dla potrzebujących.<br />
<strong>Oferowane przez Państwa rzeczy: zabawki, ubrania, książki, sprzęt sportowy zostaną przekazane po segregacji odpowiednio do Domu Samotnej Matki w Warszawie oraz do Domu Dzieci Niepełnosprawnych w Mrągowie (ostatnie zdjęcie). Pieniądze uzyskane ze sprzedaży ciast oraz stoł&oacute;w zostaną przeznaczone na zakup art.higienicznych oraz art.szkolnych r&oacute;wnież dla dzieci niepełnosprawnych.</strong><br />
<br />
Serdecznie dziękujemy za wsp&oacute;łpracę i liczne przybycie.<br />
<br />
Osobne podziękowania dla uczni&oacute;w kl.8 A za pomoc przy sprzedaży ciast, ustawianiu stoł&oacute;w.<br />
Do zobaczenia wiosną lub latem.<br />
<br />
<br />
Organizatorki<br />
Ewa Zackiewicz-Madejska<br />
Joanna Schantl<br />
<br />
			</p>

		</div>
			

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/10195/dsc_3423.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10195/800x600_dsc_3423.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10196/dsc_3424.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10196/800x600_dsc_3424.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10197/dsc_3440.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10197/800x600_dsc_3440.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10198/dsc_3451.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10198/800x600_dsc_3451.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10199/dsc_3452a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10199/800x600_dsc_3452a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10290/dsc_3462.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10290/800x600_dsc_3462.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10291/dsc_3464.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10291/800x600_dsc_3464.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10292/img_20181116_110525.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10292/800x600_img_20181116_110525.jpg);">
			</a>
		</div>
		
	
</div>

		<a href="archiwum-1589.html" title="Archiwum" class="btn btn-default">Powrót do listy</a>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Flohmarkt',
    '',
    'https://wbs.pl/flohmarkt-2880.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-15',
    'powrot-do-szkoly-klas-13-3870',
    'Powrót  do szkoły klas 1-3',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15351/800x600_img_20210113_083314.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Od przyszłego poniedziałku, tj. 18.01 uczniowie klas 1-3 będą mogli ponownie podjąć naukę stacjonarną. Wciąż obowiązują nas jak w całej Polsce obostrzenia sanitarne i obowiązek noszenia maseczek.<br />
<br />
Cieszymy się ogromnie, że będziemy mogli ponownie powitać w najmłodszych uczni&oacute;w w naszej szkole i wierzymy, że wkr&oacute;tce spotkamy się w niej w pełnym składzie!<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Powrót  do szkoły klas 1-3',
    '',
    'https://wbs.pl/powrot__do_szkoly_klas_13-3870.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-16',
    'klip-z-festynu-letniego-2019-3247',
    'Klip z Festynu Letniego 2019',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/12262/800x600_somerfest19-337.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: center;"><br />
Zapraszamy do obejrzenia klipu z ostatniego Festynu Letniego w campusie im. Willy''ego Brandta w Warszawie.<br />
Zobaczcie, jak gorąco witaliśmy wakacje!<br />
<br />
<iframe src="https://www.youtube.com/embed/AS4K_LKovd4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe></div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Klip z Festynu Letniego 2019',
    '',
    'https://wbs.pl/klip_z_festynu_letniego_2019_-3247.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-17',
    'swiatowy-dzien-ksiazki-i-praw-autorskich-w-wbs-3961',
    'Światowy Dzień Książki i Praw Autorskich w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15627/800x600_swiatowy_dzien_ksiazki_i_praw_autorskich_wbs.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15628/3a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15628/800x600_3a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15629/5a_welttagdesbuches.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15629/800x600_5a_welttagdesbuches.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15630/lesen_in_der_4a_am_tag_des_buches_.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15630/800x600_lesen_in_der_4a_am_tag_des_buches_.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15631/10.1.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15631/800x600_10.1.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15632/4a_max_hartmann.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15632/800x600_4a_max_hartmann.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15633/felix_aus_der_1a_sowie_max_aus_der_4a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15633/800x600_felix_aus_der_1a_sowie_max_aus_der_4a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15635/karolina_zmijewska.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15635/800x600_karolina_zmijewska.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15636/2a_helena.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15636/800x600_2a_helena.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15637/2a_eliza2a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15637/800x600_2a_eliza2a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15638/3_c_mateusz_krawczyk.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15638/800x600_3_c_mateusz_krawczyk.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15639/4c_sara.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15639/800x600_4c_sara.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15640/5a_liv_normann.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15640/800x600_5a_liv_normann.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15641/dzien_ksiazki_zosia_hart_dyke_6c.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15641/800x600_dzien_ksiazki_zosia_hart_dyke_6c.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15642/ksawery_zmijewski.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15642/800x600_ksawery_zmijewski.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15643/liluo.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15643/800x600_liluo.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15744/hannah_hartmann.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15744/800x600_hannah_hartmann.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15661/90aa1066-381d-44ab-9549-50992659eb54.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15661/800x600_90aa1066-381d-44ab-9549-50992659eb54.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15670/img_20210423_151138.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15670/800x600_img_20210423_151138.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15668/img_20210423_102642.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15668/800x600_img_20210423_102642.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15671/img_20210423_151234.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15671/800x600_img_20210423_151234.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15662/img_20210423_100529.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15662/800x600_img_20210423_100529.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15664/img_20210',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Światowy Dzień Książki i Praw Autorskich w WBS',
    '',
    'https://wbs.pl/swiatowy_dzien_ksiazki_i_praw_autorskich_w_wbs-3961.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-18',
    'jesienne-zmiany-i-prezenty-w-campusie-im-willy-ego-brandta-w-warszawie-3797',
    'Jesienne zmiany i …prezenty w Campusie im. Willy’ego Brandta w Warszawie',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14872/800x600_www1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Pracownicy Campusu im. Willy&rsquo;ego Brandta w Warszawie,<br />
<br />
dziś z radością prezentujemy Wam nowe logo Campusu im. Willy&rsquo;ego Brandta w Warszawie, będące znakiem graficznym, łączącym w jedność wszystkie nasze jednostki, tj. Polsko-Niemiecką Szkołę Spotkań i Dialogu im. Willy&rsquo;ego Brandta, Deutscher Kindergarten, Akademię Piłkarską WBS oraz Akademię Muzyczną WBS.<br />
<br />
Nowe logo ma uświadamiać społeczności szkolnej i lokalnej, że Campus im. Willy&rsquo;ego Brandta w Warszawie to miejsce edukacji od przedszkola do matury, w kt&oacute;rym poza edukacją rozwija się pasje sportowe oraz muzyczne. Campus im. Willy&rsquo;ego Brandta w Warszawie to także ważne miejsce spotkań i dialogu polsko &ndash; niemieckiego.<br />
<br />
Logo Campusu jest nam szczeg&oacute;lnie bliskie, gdyż powstało na bazie projektu naszego ucznia Niko Oremusa, kt&oacute;rego praca wygrała konkurs na logo Campusu ogłoszonego w zeszłym roku szkolnym. Będzie ono towarzyszyło poszczeg&oacute;lnym logotypom jednostek, by wzmocnić świadomość że budujemy wsp&oacute;lny, oparty na naszej misji i wartościach Campus.<br />
<br />
Cieszymy się, że już od dziś będziemy mogli pod wsp&oacute;lnym znakiem promować wszystkie nasze jednostki.<br />
Byśmy pamiętali, że jesteśmy ważną częścią Campusu im. Willy&rsquo;ego Brandta w Warszawie przygotowaliśmy dla naszych pracownik&oacute;w niespodzianki. R&oacute;wnież nasi podopieczni mogą spodziewać się wkr&oacute;tce czegoś wyjątkowego 😊<br />
<br />
Życzymy sukces&oacute;w oraz smacznej kawy lub herbaty w nowych kubkach 😊<br />
<br />
Z pozdrowieniami<br />
Zarząd Niemieckiego Towarzystwa Szkolnego w Warszawie<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Jesienne zmiany i …prezenty w Campusie im. Willy’ego Brandta w Warszawie',
    '',
    'https://wbs.pl/jesienne_zmiany_i__prezenty_w_campusie_im_willy_ego_brandta_w_warszawie-3797.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-19',
    'nasza-nauczycielka-historii-i-geografiim-glinka-o-polskoniemieckim-podreczniku-do-historii-3514',
    'Nasza nauczycielka historii i geografii-M. Glinka o polsko-niemieckim podręczniku do historii',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13846/800x600_europa.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Kilka lat temu zrodził się pomysł stworzenia polsko-niemieckiego podręcznika do nauki historii. Podręcznika, kt&oacute;ry nie tylko pozwoli lepiej poznać historię graniczących ze sobą kraj&oacute;w, ale przekaże r&oacute;wnież wiedzę o pamięci kulturowej będącej kluczem do zrozumienia historii, polityki i kultury obu kraj&oacute;w. <br />
<br />
Obecnie trwają prace nad 4 tomem polsko-niemieckiego podręcznika do historii &quot;Europa. Nasza historia.&quot;, kt&oacute;ry nie tylko pozwala zrozumieć lepiej naszego sąsiada, ale r&oacute;wnież zabiera w podr&oacute;ż w czasie po Europie. O tym jak dlaczego potrzebny jest taki podręcznik i co w nim znajdziemy opowiada w najnowszym wydaniu &quot;Dialogu&quot; (128/2019) Małgorzata Glinka - nauczycielka historii i geografii w Polsko - Niemieckiej Szkole Spotkań i Dialogu im. Willy''ego Brandta oraz członkini gremium nauczycielskiego, kt&oacute;re od 2018r. funkcjonuje przy Wsp&oacute;lnej Polsko-Niemieckiej Komisji Podręcznikowej Historyk&oacute;w i Geograf&oacute;w. <br />
<br />
Zapraszamy do przeczytania artykułu w załączniku.<br />
<br />
<br />
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Europejskie perspektywy. Polsko-niemiecki podręcznik.
				</td>
				<td>
					<a href="pub/cms/files/1285/20191218150451475.pdf" title="Europejskie perspektywy. Polsko-niemiecki podręcznik." target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nasza nauczycielka historii i geografii-M. Glinka o polsko-niemieckim podręczniku do historii',
    '',
    'https://wbs.pl/nasza_nauczycielka_historii_i_geografiim_glinka_o_polskoniemieckim_podreczniku_do_historii-3514.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-20',
    'wesolych-swiat-bozego-narodzenia-3854',
    'Wesołych Świąt Bożego Narodzenia',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15221/800x600_gf-1qxu-nhmd-c83m_w-swieta-wszyscy-wysylaja-sobie-zyczenia-664x442-nocrop.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<img src="/pub/uploader/images/Weihnachten_2020.png" alt="Weihnachten_2020.png" width="850" height="603" /><br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wesołych Świąt Bożego Narodzenia',
    '',
    'https://wbs.pl/wesolych_swiat_bozego_narodzenia-3854.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-21',
    'konkurs-czytelniczy-w-wbs-3473',
    'Konkurs czytelniczy w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13548/800x600_dsc03426.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<strong>Etap 1</strong><br />
<br />
W pierwszej rundzie, wszyscy uczniowie z naszej klasy czytali na głos, 25 os&oacute;b. Poproszono nas o przeczytanie tekstu, kt&oacute;ry sami wybraliśmy. Czas czytania wynosił 3 minuty. Każdy dostał kartkę z numerem od 1 do 25. Konkurs rozpoczęła osoba, kt&oacute;ra wylosowała nr 1. Wszyscy siedzieliśmy wygodnie w szkolnej bibliotece,i w kolejności czytaliśmy czytaliśmy na głos. Jury składało się z naszego nauczyciela języka niemieckiego, bibliotekarza szkolnego i praktykanta. Po wszystkich prezentacjach jury udało się na obrady. Następnie 10 os&oacute;b zostało wybranych do przejscia do drugiego etapu.<br />
<br />
<strong>Etap 2</strong><br />
Do drugiej rundy przeszło 10 os&oacute;b, kt&oacute;rych występom można było się przyglądać . W naszej szkolejest tradycją, że osoba, kt&oacute;ra wygrała w zeszłym roku zasiada w jury w II rundzie. To był uczeń z 7 klasy. Obecny był r&oacute;wnież drugi nauczyciel języka niemieckiego. Tak jak w 1. rundzie, pozwolono nam losować numerki. Opr&oacute;cz wybranego przez siebie tekstu do przeczytania był jeden tekst obcy. Czas czytania wynosił 3 minuty dla każdego tekstu. Konkurs zakończył się ogloszeniem zwycięzcy, kt&oacute;ry&nbsp; 27 stycznia 2020 roku weźmie udział w finale we Frankfurcie nad Odrą.<br />
<br />
Myślę, że większość dzieci bardzo się bodobał konkurs czytelniczy w WBS. Każdemu fragmentowi książki przysłuchiwałem się z ciekawością i wyobrażałem sobie jej ciąg dalszy. Moglismy posłuchać książek:&nbsp; Rico, Oscar i Deep Shadows; Labirynt kłamstw; Shadow Children; Nathan Fox; Ghost Ship; The Day I Became Cool; Ink Heart; The School for Good and Evil; Rico, Oskar i Theft Stone; East Wind, razem jesteśmy wolni i wiele innych.<br />
<br />
Adam Jakub Depta 6a <br />
<br />
<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13544/dsc03422.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13544/800x600_dsc03422.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13545/dsc03421.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13545/800x600_dsc03421.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13546/dsc03423.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13546/800x600_dsc03423.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13547/dsc03425.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13547/800x600_dsc03425.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13549/dsc03429.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13549/800x600_dsc03429.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Konkurs czytelniczy w WBS',
    '',
    'https://wbs.pl/konkurs_czytelniczy_w_wbs-3473.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-22',
    'tydzien-antymobbingowy-9091209-3327',
    'Tydzień antymobbingowy (9.09-12.09)',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/12869/800x600_img_20190909_132736.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drogie  uczennice, drodzy uczniowie,<br />
<br />
Francuski ksiądz Vincent od Paul, kt&oacute;ry opiekował się biednymi i chorymi od początku XVIII wieku, przez wielu uważany jest za geniusza miłości.<br />
<br />
Udało mu się rozwiązać problemy, kt&oacute;re pojawiają się z dnia na dzień w życiu człowieka, w rozmowie z życzliwością i bez zastraszania.<br />
<br />
Jego powiedzenie, że życzliwość rozwiązuje problemy, wciąż mnie fascynuje.<br />
<br />
Niestety, nie zawsze odnosimy sukcesy w życiu codziennym i szkolnym i zdarzają się tak złe przypadki mobbingu.<br />
<br />
<strong>Mobbing to prześladowanie torturujące człowieka przez inną osobę lub grupę i niestety ma miejsce w naszej szkole.</strong><br />
<br />
Aby opracować strategie rozwiązywania problem&oacute;w bez zastraszania, proponujemy <strong>tydzień antymobbingowy.</strong><br />
<br />
Cieszę się, że wszyscy uczniowie biorą udział i bardzo dziękuję Pani Kondrackiej, Panu Pommereningowi, Pani Sarneckiej i Pani Zachurzok za pracę włożoną w przygotowanie projekt.<br />
<br />
Niech od dziś obowiązuje w WBS powiedzenie <strong><span style="color: rgb(128, 0, 0);">&bdquo;życzliwość rozwiązuje problemy&rdquo;</span></strong>, a zastraszanie niech na zawsze będzie dla nas obcym słowem.<br />
<br />
Mechthild Hinsberger- Boguski<br />
Dyrektor szkoły<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/12870/img_20190909_132501.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12870/800x600_img_20190909_132501.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12871/img_20190909_133003.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12871/800x600_img_20190909_133003.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Tydzień antymobbingowy (9.09-12.09)',
    '',
    'https://wbs.pl/tydzien_antymobbingowy_9091209-3327.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-23',
    'kreatywnie-przeciw-koronawirusowi-wystawa-plakatow-2a-3678',
    'Kreatywnie przeciw koronawirusowi. Wystawa plakatów 2A',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14387/800x600_www3.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Od ferii wielkanocnych uczniowie klasy 2 A w ramach zajęć &bdquo;Praca własna&rdquo; poznają nowe metody pracy. Dzięki tym zajęciom nauczyli się  zaznaczać słowa kluczowe w tekście, tworzyć notatki, wyszukiwać w słownikach i encyklopediach informacji o swoim ulubionym zwierzęciu i jego cechach charakterystycznych. Rezultaty tych poszukiwań  przedstawiali w formie plakatu. <br />
Na zakończenie projektu dzieci ćwiczyły umiejętność prezentowania online  swych prac przed innymi dziećmi.<br />
Aby udostępnić wielkie dzieła sztuki dzieci wszystkim zainteresowanym, stworzyliśmy wsp&oacute;lną wystawę online plakat&oacute;w edukacyjnych.<br />
Zapraszamy wszystkich do ich podziwiania 😊<br />
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Plakaty 
				</td>
				<td>
					<a href="pub/cms/files/1336/online-ausstellung_der_lernplakate_der_2a_im_fach_freiarbeit_mit_herrn_pommerening1_05.06.pptx" title="Plakaty " target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Kreatywnie przeciw koronawirusowi. Wystawa plakatów 2A',
    '',
    'https://wbs.pl/kreatywnie_przeciw_koronawirusowi_wystawa_plakatow_2a-3678.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-24',
    'kochane-dzieci-wszystkiego-najlepszego-w-dniu-waszego-swieta-3676',
    'Kochane Dzieci, wszystkiego najlepszego w dniu Waszego święta!',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14372/800x600_img_20190531_102243.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W tym roku niestety nie zjemy wsp&oacute;lnie lod&oacute;w, ale życzymy Dzieciom w dniu ich święta wszystkiego najlepszego.🌻<br />
<br />
✨ Żyjcie swoim marzeniami,<br />
<br />
🌞 zawsze myślcie pozytywnie,<br />
<br />
❤️ i r&oacute;bcie to, co kochacie,<br />
<br />
🍀 bądźcie szczęśliwi,<br />
<br />
😀 dużo się śmiejcie,<br />
<br />
🎯 realizujcie twoje cele,<br />
<br />
💪 wierzcie w siebie,<br />
<br />
💟 podążajcie za swoimi sercami! <br />
<br />
Na zdjęciach: Dzień Dziecka 2019 <br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14373/img_20190531_101134.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14373/800x600_img_20190531_101134.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14374/img_20190531_111050.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14374/800x600_img_20190531_111050.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14375/img_20190604_115233.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14375/800x600_img_20190604_115233.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14376/img_20190604_115432.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14376/800x600_img_20190604_115432.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14377/img_20190531_101606.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14377/800x600_img_20190531_101606.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Kochane Dzieci, wszystkiego najlepszego w dniu Waszego święta!',
    '',
    'https://wbs.pl/kochane_dzieci_wszystkiego_najlepszego_w_dniu_waszego_swieta-3676.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-25',
    'uroczyste-pozegnanie-maturzystow-i-rozdanie-swiadectw-dojrzalosci-4009',
    'Uroczyste pożegnanie maturzystów i rozdanie świadectw dojrzałości',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15941/800x600_21-06_abi21-456.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: justify;">11 czerwca 2021 r. o godz. 16.00 odbyło się w sali gimnastycznej uroczyste pożegnanie maturzyst&oacute;w i wręczenie świadectw. Podobnie jak w ubiegłym roku, wydarzenie mogło odbyć się jedynie przy zachowaniu zasad reżimu sanitarnego.<br />
Mała, siedmioosobowa klasa absolwent&oacute;w została serdecznie powitana przez panią dyrektor Mechthild Hinsberger - Boguski, koordynatora pionu licealnego - panią dr Christinę Biermann oraz członk&oacute;w Zarządu NTS - pana Piotra Franciszkowskiego i panią Marzenę Farion - Rzeźniczak.<br />
Następnie głos w imieniu klasy zabrała Natascha Koppel. Z humorem wspominała minione lata szkolne, a następnie wraz z całą klasą podziękowała nauczycielom pionu licealnego.<br />
W swoim przem&oacute;wieniu wychowawca klasy, pan Norbert St&uuml;we, por&oacute;wnał drogę klasy do g&oacute;rskiej wędr&oacute;wki, podczas kt&oacute;rej wszyscy w końcu szczęśliwie i pomyślnie dotarli na szczyt, mimo kilku trudnych sytuacji.<br />
W swoim wystąpieniu pani&nbsp;Mechthild Hinsberger -  Boguski zagłębiła się w etymologię nazwisk maturzyst&oacute;w i umiejętnie powiązała je z ich pozytywnymi cechami.<br />
Punktem kulminacyjnym uroczystości było wręczenie nagr&oacute;d po przem&oacute;wieniu Dyrektora Szkoły. Przedstawiciele Zarządu wręczyli tegoroczną nagrodę im. Willy''ego Brandta Oldze Rybałt za wybitne osiągnięcia intelektualne i wyjątkowe zaangażowanie na rzecz społeczności szkolnej. Jej niezwykłe osiągnięcia zostały r&oacute;wnież uhonorowane oddzielnie w przedmiotach: język niemiecki (nagroda Schefflera), matematyka, fizyka i muzyka. W kr&oacute;tkim wystąpieniu Olga podziękowała za liczne wyr&oacute;żnienia i zachwyciła publiczność swoimi przemyśleniami na temat wszechstronnego kształcenia og&oacute;lnego, kt&oacute;re można osiągnąć tylko poprzez zintegrowane nauczanie. <br />
Aleksander Morawietz został wyr&oacute;żniony za swoje wieloletnie sukcesy muzyczne.<br />
<br />
Wzruszającym momentem było wręczenie ż&oacute;łwi przez panią Eleonora Rytel. Otrzymuję je uczniowie, kt&oacute;rzy uczęszczali do naszej szkoły od przedszkola. W tym roku były to trzy osoby: Olga, Aleksander i Wiktoria.<br />
Ostatnim prelegentem tego wydarzenia był Ambasador Niemiec w Warszawie, dr Bernd Freytag von Loringhoven. Pogratulował on absolwentom naszej szkoły sukcesu i wskazał na decyzje, kt&oacute;re muszą teraz podjąć. Następnie podpisał wszystkie świadectwa i uroczyście wręczył je naszym dumnym absolwentom.<br />
Funkcję moderatora uroczystości pełniła pani Schallschmidt, mocno związana naszymi maturzystami nauczycielka pionu licealnego. <br />
O muzyczną oprawę uroczystości zadbali: Kasia Osokin (11 klasa), Konstantin Sorg (10 klasa) i nasz nauczyciel muzyki pan Lemiszewski. Ich występy nagrodzone zostały gromkimi brawami. <br />
Uroczystość zakończyła się bankietem przy lampce szampana, kt&oacute;ry stworzył towarzyską, sprzyjającą pożegnalnym rozmowom atmosferę.  <br />
Życzymy wszystkiego najlepszego tegorocznym absolwentom i teraz cieszymy się na kolejne spotkanie!</div>
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15942/21-06_abi21-4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15942/800x600_21-06_abi21-4.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15943/21-06_abi21-1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15943/800x600_21-06_abi21-1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15944/21-06_abi21-11.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15944/800x600_21-06_abi21-11.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15945/21-06_abi21-16.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15945/800x600_21-06_abi21-16.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15946/21-06_abi21-46.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15946/800x600_21-06_abi21-46.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15947/21-06_abi21-65.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15947/800x600_21-06_abi21-65.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15948/21-06_abi21-69.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15948/800x600_21-06_abi21-69.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15949/21-06_abi21-72.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/pho',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Uroczyste pożegnanie maturzystów i rozdanie świadectw dojrzałości',
    '',
    'https://wbs.pl/uroczyste_pozegnanie_maturzystow_i_rozdanie_swiadectw_dojrzalosci-4009.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-26',
    'wspominamy-haline-szpilman-3647',
    'Wspominamy Halinę Szpilman...',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14307/800x600_szpilman_www5.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Z wielkim smutkiem&nbsp; przyjęliśmy wiadomość o śmierci Pani Haliny Szpilman, z domu Grzecznarowska, ktora odeszła w ostatni weekend w wieku 92 lat.<br />
<br />
Jak wszyscy ludzie z jej pokolenia, historyczne wydarzenia XX wieku, a zwłaszcza II wojna światowa, pozostawiły głębokie ślady w życiu tej wyjątkowej kobiety.<br />
<br />
Jej ojciec, polityk Partii Socjalistycznej i były burmistrz Radomia, stawiający op&oacute;r inwazji niemieckiej w 1939 r., został aresztowany przez gestapo i deportowany do obozu koncentracyjnego Sachsenhausen.<br />
<br />
W związku z tym przez całą wojnę jego rodzina była pod stałą obserwacją niemieckiej władzy. Jak powiedziała sama Pani Szpilman, nigdy nie pozbyła się strachu przed tajną policją. Łut szczęścia sprawił, że jej ojciec przeżył wojnę. Pod koniec wojny rodzina Pani Haliny na kilka miesięcy udzieliła schronienia pewnej Żyd&oacute;wce z małą c&oacute;reczką.<br />
<br />
Po wojnie Halina Szpilman została hematologiem. Pod koniec lat czterdziestych spotkała słynnego pianistę i kompozytora Władysława Szpilmana, kt&oacute;ry jako jedyny z rodziny przeżył koszmar getta i okupacji. Jego wspomnienia zostały&nbsp; z wielkim sukcesem sfilmowane&nbsp; przez Romana Polańskiego w 2002 roku w &quot;Pianiście&quot;. <br />
<br />
Dzięki pośrednictwu Ambasady, w dniu 12 czerwca 2018 r. Pani Halina Szpilman zaszczyciła nas swoją obecnością na spotkaniu z uczniami WBS, co było niezapomnianym przeżyciem dla wszystkich zaangażowanych os&oacute;b. Podczas tego wydarzenia opowiedziała o burzliwym życiu swojej rodziny i oczywiście o losach swojego męża. Po jej wykładzie przeszliśmy do ożywionej dyskusji, podczas kt&oacute;rej z wielkim zainteresowaniem i sympatią przysluchiwaliśmy się naszemu gościowi. <br />
<br />
Szczeg&oacute;lnie ważne dla Pani Szpilman było przekazanie uczniom przesłania, że nigdy nie należy potępiać całego narodu, ale zawsze patrzeć na działania każdego człowieka z osobna. <br />
<br />
Dla nas w Polsko-Niemieckiej Szkole Spotkań i Dialogu WBS był to wielki zaszczyt i radość, że mogliśmy gościć Panią Szpilman. <br />
<br />
Opłakujemy wielką osobowość i nie zapomnimy o niej!<br />
<br />
Norbert St&uuml;we<br />
<br />
Zapraszamy do obejrzenia <a href="https://wbs.pl/frau_dr_halina_szpilman_an_der_wbs-2768.html">zdjęć z wizyty P</a>ani Haliny Szpilman w naszej szkole. <br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14309/szpilmanfb.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14309/800x600_szpilmanfb.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wspominamy Halinę Szpilman...',
    '',
    'https://wbs.pl/wspominamy_haline_szpilman-3647.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-27',
    'migracja-i-integracja-w-europie-podsumowanie-projektu-w-ramach-programu-erasmus-plus-3996',
    'Migracja i integracja w Europie. Podsumowanie projektu w ramach programu Erasmus plus',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15851/800x600_www2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: center;">Zakończyliśmy realizację ostatniego etapu naszego projektu  &bdquo;Migracja i integracja w Europie&rdquo; w ramach programu Erasmus plus.</div>
<br />
W lutym 2021 roku zakończyliśmy realizację trwającego ponad dwa lata, bo od września 2018 roku, projektu, kt&oacute;ry realizowaliśmy z trzema szkołami  partnerskimi &ndash; z Łotwy, Francji i Niemiec, w ramach programu Erasmus plus. Tym razem nasi uczniowie &ndash; uczestnicy projektu z klasy 11 i 12 mieli za zadanie dotrzeć do os&oacute;b, kt&oacute;re zdecydowały się na swoją dłuższą lub kr&oacute;tszą migrację do Polski w celach edukacyjnych. <br />
<br />
Kasia Osokin i Asia Najman spotkały się online z naszym tegorocznym praktykantem, nauczycielem języka polskiego jako obcego i historii &ndash; Panem Rene Wennmacherem. Okazało się, że dzięki pobytowi w Polsce rozm&oacute;wca dziewcząt zyskał nie tylko kompetencje językowe, ale także pracował jako nauczyciel prowadzący lekcje języka niemieckiego  w szkole podstawowej oraz jako wolontariusz w muzeum Auschwitz-Birkenau w 2011roku. W 2018 roku podjął on studia historyczne  na Uniwersytecie Jagiellońskim w ramach studenckiej wymiany programu Erasmus.<br />
<br />
Olga Rybałt z klasy 12, przy technicznym wsparciu i zaangażowaniu Igora Wydrzyńskiego- Głowackiego z klasy 11, przeprowadziła wywiad z Panem dr Antonem Marczyńskim &ndash; dziennikarzem i wykładowcą filozofii, tłumaczem i publicystą, kt&oacute;ry przybył do Polski z Ukrainy w roku 2004. Gość Olgi rozmawiał o trudnych początkach pobytu w Polsce, drodze do rozwijania i pogłębiania własnych filozoficznych pasji, a także o tym  jak ważna jest ciekawość i odwaga w podejmowaniu decyzji dotyczących &bdquo;naukowych&rdquo; emigracji.<br />
<br />
Kończąc naszą przygodę z tą edycją programu Erasmus plus chciałybyśmy podziękować wspierającym nas nauczycielom, a przede wszystkim uczniom naszej szkoły, kt&oacute;rzy uczestniczyli w wymianach, gościli w Warszawie r&oacute;wieśnik&oacute;w z partnerskich kraj&oacute;w, angażowali się w projekty, podr&oacute;żowali z nami do Duisburga w Niemczech, Tarbes we Francji oraz wirtualnie do Rygi na Łotwie  za tw&oacute;rczy, wsp&oacute;lnie spędzony czas, zaangażowanie i otwartość. <br />
<br />
Opiekunki projektu &ndash; Zuzanna Tomasińska - Karol i Joanna Pietrzak<br />
<br />
<div style="text-align: center;">&nbsp;</div>
<br />
<iframe src="https://www.youtube.com/embed/7oAwUI-Q290" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
<br />
<div style="text-align: left;"><img src="/pub/uploader/images/ERASMUSPLUS3_1024x550.jpg" alt="ERASMUSPLUS3_1024x550.jpg" width="300" height="161" /></div>
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Interview with Rene Wennmacher
				</td>
				<td>
					<a href="pub/cms/files/1619/erasmus_+.pdf" title="Interview with Rene Wennmacher" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Migracja i integracja w Europie. Podsumowanie projektu w ramach programu Erasmus plus',
    '',
    'https://wbs.pl/migracja_i_integracja_w_europie_podsumowanie_projektu_w_ramach_programu_erasmus_plus-3996.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-28',
    'maski-dla-medykow-podziekowanie-3649',
    'Maski dla medyków- podziękowanie',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14311/800x600_spenden.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Nasz uczeń Mikołaj Szubert (9 A) miesiąc temu zorganizował akcję zbierania funduszy na maski dla medyk&oacute;w. <br />
Dzięki Waszej pomocy i pomocy przyjaci&oacute;ł jego rodziny udało mu się zebrać <strong>9 150 zł</strong>. Ta suma pozwoliła kupić 500 profesjonalnych masek. Kampania została r&oacute;wnież wsparta przez 275 dodatkowych masek, co daje łącznie <strong>775</strong>. <br />
Mikołaj dostarczy je do wybranych szpitali dziecięcych i plac&oacute;wek.<br />
<br />
W imieniu Mikołaja chcielibyśmy podziękować Państwu za wsparcie a Mikołajowi dziękujemy za zaangażowanie.<br />
<br />
Szczeg&oacute;lne podziękowania dla naszego partnera Rotary Warszawa Goethe za wsparcie tej szlachetnej inicjatywy. <br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14312/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14312/800x600_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14313/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14313/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14314/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14314/800x600_3.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Maski dla medyków- podziękowanie',
    '',
    'https://wbs.pl/maski_dla_medykow_podziekowanie-3649.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-29',
    'koktajl-powitalny-dla-rodzicow-nowych-uczniow-wbs-3317',
    'Koktajl powitalny dla rodziców nowych uczniów WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/12838/800x600_dsc01215.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W poniedziałek w naszej szkole odbył się Koktajl Powitalny dla rodzic&oacute;w naszych tegorocznych pierwszoklasist&oacute;w. Jest to twajca od lat tradycja integrująca nowych rodzic&oacute;w. W tym samym czasie przedstawiono zastępcę dyrektora, pana Ulfa Bornmanna, członk&oacute;w Zarządu, a także innych pracownik&oacute;w szkoły, w tym przede wszystkim nauczycieli. Wiecz&oacute;r rozpoczęła nasza pani dyrektor Mechthild Hinsberger-Boguski. Po przemowach odbyły się rozmowy między rodzicami a pracownikami naszej szkoły przy lampce prosecco i małych przekąskach.<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/12839/dsc01220.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12839/800x600_dsc01220.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12840/dsc01225.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12840/800x600_dsc01225.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12841/dsc01228.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12841/800x600_dsc01228.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12842/dsc01233.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12842/800x600_dsc01233.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12843/dsc01262.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12843/800x600_dsc01262.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12844/dsc01273.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12844/800x600_dsc01273.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12845/dsc01276.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12845/800x600_dsc01276.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12846/dsc01297.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12846/800x600_dsc01297.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12847/dsc01253.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12847/800x600_dsc01253.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Koktajl powitalny dla rodziców nowych uczniów WBS',
    '',
    'https://wbs.pl/koktajl_powitalny_dla_rodzicow_nowych_uczniow_wbs-3317.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-30',
    'sladami-fryderyka-chopina-wycieczka-klasy-6c-3915',
    'Śladami Fryderyka Chopina. Wycieczka klasy 6c',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15515/800x600__dsc0996.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W urodziny miesiąca marca, nasza klasa postanowiła spędzić dzień, inaczej.<br />
Rano, zamiast włączania komputera, założyliśmy kurtki i wyjechaliśmy na spotkanie z muzyką.<br />
Na lekcje czasem się sp&oacute;źniamy, ale nie dziś, dziś niekt&oacute;rzy z nas  byli już p&oacute;ł godziny przed czasem.<br />
Chopina, każdy zna, ale czy wie w kim się kochał, czy lubił matematykę, od kogo dostał złoty pierścień i ile miał lat jak wyjechał do Paryża?<br />
Na mapkach zaznaczaliśmy gdzie koncertował i gdzie mieszkał. Kilkukilometrowy spacer dobrze nam zrobił. Muzeum w Pałacu Ostrogskich bardzo się podobało, a chyba największe wrażenie zrobił jego pukiel włos&oacute;w i maska pośmiertna.<br />
Dziś nam grała nie tylko muzyka !<br />
Radość ze spotkania, śmiechy, bycie ze sobą- to było to, czego nam brakowało.<br />
I na dodatek nie tylko świętowaliśmy urodziny miesiąca, ale i urodziny naszej koleżanki. Były świeczki, no może raczej zimne ognie, gorąca czekolada z prawdziwą bita śmietaną i ciachem do wyboru. Było przepysznie! <br />
<br />
Klasa 6c <br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15516/_dsc0968.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15516/800x600__dsc0968.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15517/_dsc0976.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15517/800x600__dsc0976.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15518/_dsc0981.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15518/800x600__dsc0981.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15519/_dsc0988.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15519/800x600__dsc0988.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15520/_dsc0989.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15520/800x600__dsc0989.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15521/_dsc0971.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15521/800x600__dsc0971.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Śladami Fryderyka Chopina. Wycieczka klasy 6c',
    '',
    'https://wbs.pl/sladami_fryderyka_chopina_wycieczka_klasy_6c-3915.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-31',
    'summer-camp-akademii-pilkarskiej-wbs-warszawa-3993',
    'Summer Camp Akademii Piłkarskiej WBS Warszawa',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15844/800x600_www5.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Lato zbliża się wielkimi krokami, więc nadszedł najwyższy czas, żeby zaprosić Was na coroczny <strong>SUMMER CAMP!</strong> <br />
W tym roku przygotowaliśmy dla Was aż trzy turnusy:<br />
<br />
<strong>02 - 08 SIERPNIA 2021<br />
06 - 22 SIERPNIA 2021<br />
23 - 29 SIERPNIA 2021</strong><br />
<br />
Zapraszamy do zapis&oacute;w i przypominamy, że liczba miejsc jest ograniczona!    <br />
<br />
<img src="/pub/uploader/images/Plakat do druku 1 turnus-1_1.jpg" alt="Plakat do druku 1 turnus-1_1.jpg" width="500" height="707" /><br />
<br />
<img src="/pub/uploader/images/Plakat_do_druku_2_1.jpg" alt="Plakat_do_druku_2_1.jpg" width="500" height="707" /><br />
<br />
<img src="/pub/uploader/images/Plakat_do_druku_3_1.jpg" alt="Plakat_do_druku_3_1.jpg" width="500" height="707" /><br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Summer Camp Akademii Piłkarskiej WBS Warszawa',
    '',
    'https://wbs.pl/summer_camp_akademii_pilkarskiej_wbs_warszawa-3993.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-32',
    'dzien-jednosci-niemiec-2829',
    'Dzień Jedności Niemiec',
    '',
    '',
    '04.10.2018',
    '
		<p class="lead">
			04.10.2018
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/9943/800x600_4.10_tagdereinheit-254.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				Dziś świętowaliśmy w naszej szkole Dzień Jedności  Niemiec. Z tej okazji uczniowie klas 1-12 brali udział w inspirujących i angażujących warsztatach, podczas kt&oacute;rych w niestandardowy spos&oacute;b poznawali historię zjednoczenia Niemiec. <br />
Była to okazja by przenieść się w czasie i poczuć klimat wydarzeń lat 90. Ogromne emocje u uczni&oacute;w budziło burzenie muru, będące wyrazem sprzeciwu wobec podział&oacute;w zar&oacute;wno politycznych, jak i społecznych.<br />
<br />
Zapraszamy do obejrzenia fotorelacji<br />
<br />
Zdjęcia Marek Kępiński<br />
<br />
			</p>
		</div>


		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/9942/4.10_tagdereinheit-198.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9942/800x600_4.10_tagdereinheit-198.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9945/4.10_tagdereinheit-200.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9945/800x600_4.10_tagdereinheit-200.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9946/4.10_tagdereinheit-252.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9946/800x600_4.10_tagdereinheit-252.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9947/4.10_tagdereinheit-334.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9947/800x600_4.10_tagdereinheit-334.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9948/4.10_tagdereinheit-341.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9948/800x600_4.10_tagdereinheit-341.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9949/4.10_tagdereinheit-389.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9949/800x600_4.10_tagdereinheit-389.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9950/4.10_tagdereinheit-406.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9950/800x600_4.10_tagdereinheit-406.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9951/4.10_tagdereinheit-112.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9951/800x600_4.10_tagdereinheit-112.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9952/4.10_tagdereinheit-120.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9952/800x600_4.10_tagdereinheit-120.jpg);">
			</a>
		</div>
		
	
</div>

		<a href="archiwum-1589.html" title="Archiwum" class="btn btn-default">Powrót do listy</a>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dzień Jedności Niemiec',
    '04.10.2018',
    'https://wbs.pl/dzien_jednosci_niemiec-2829.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-33',
    'bieg-sponsorowany-2823',
    'Bieg sponsorowany',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/9866/800x600_sponsorlauf-362.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				Zdjęcia Marek Kępiński<br />
			</p>
		</div>


		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/9867/sponsorlauf-18.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9867/800x600_sponsorlauf-18.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9868/sponsorlauf-24.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9868/800x600_sponsorlauf-24.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9869/sponsorlauf-68.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9869/800x600_sponsorlauf-68.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9870/sponsorlauf-80.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9870/800x600_sponsorlauf-80.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9871/sponsorlauf-123.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9871/800x600_sponsorlauf-123.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9872/sponsorlauf-164.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9872/800x600_sponsorlauf-164.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9873/sponsorlauf-205.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9873/800x600_sponsorlauf-205.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9874/sponsorlauf-246.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9874/800x600_sponsorlauf-246.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9875/sponsorlauf-305.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9875/800x600_sponsorlauf-305.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9876/sponsorlauf-342.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9876/800x600_sponsorlauf-342.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9877/sponsorlauf-366.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9877/800x600_sponsorlauf-366.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9878/sponsorlauf-377.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9878/800x600_sponsorlauf-377.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9879/sponsorlauf-404.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9879/800x600_sponsorlauf-404.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9880/sponsorlauf-411.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9880/800x600_sponsorlauf-411.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9881/sponsorlauf-426.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9881/800x600_sponsorlauf-426.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9882/sponsorlauf-428.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9882/800x600_sponsorlauf-428.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9883/sponsorlauf-478.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9883/800x600_sponsorlauf-478.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9884/sponsorlauf-491.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9884/800x600_sponsorlauf-491.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9885/sponsorlauf-493.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9885/800x600_sponsorlauf-493.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9886/sponsorlauf-531.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9886/800x600_sponsorlauf-531.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9887/sponsorlauf-775.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9887/800x600_sponsorlauf-775.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9888/sponsorlauf-814.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9888/800x600_sponsorlauf-814.jpg);">
			</a>',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Bieg sponsorowany',
    '',
    'https://wbs.pl/bieg_sponsorowany-2823.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-34',
    'wda-europatagung-2018-2883',
    'WDA - Europatagung 2018',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/10232/800x600_wda_1-29_257.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				W dniach 15 -18 listopada odbywała się w Warszawie Konferencja WDA. Brali w niej udział przedstawiciele zagranicznych szk&oacute;ł niemieckich z całej Europy. Było to wyjątkowe spotkanie, podczas kt&oacute;rego omawiane są aktualne tematy związane z wyzwaniami oraz możliwościami, jakie stoją przed dyrekcjami i zarządami szk&oacute;ł niemieckich.<br />
To były bardzo insipirujące i intensywne dni.<br />
Serdecznie dziękujemy <br />
- organizatorom- Weltverband Deutscher Auslandsschulen i WBS - Willy Brandt Schule Warschau <br />
- sponsorom oraz <br />
- uczestnikom Konferencji za obecność.<br />
<br />
			</p>

		</div>
			

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/10233/wda_1-32_265.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10233/800x600_wda_1-32_265.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10234/wda_1-9_63.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10234/800x600_wda_1-9_63.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10235/wda_1-48_342.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10235/800x600_wda_1-48_342.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10236/wda_1-52_387.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10236/800x600_wda_1-52_387.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10237/wda_1-83_564.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10237/800x600_wda_1-83_564.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10238/wda_1-86_575.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10238/800x600_wda_1-86_575.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10239/wda_gr-1_441.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10239/800x600_wda_gr-1_441.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10240/wda_gr-17_1303.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10240/800x600_wda_gr-17_1303.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10241/wda_gr-37_1339.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10241/800x600_wda_gr-37_1339.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10242/wda_gr-24_1098.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10242/800x600_wda_gr-24_1098.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10243/wda_gr-8_1441.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10243/800x600_wda_gr-8_1441.jpg);">
			</a>
		</div>
		
	
</div>

		<a href="archiwum-1589.html" title="Archiwum" class="btn btn-default">Powrót do listy</a>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'WDA - Europatagung 2018',
    '',
    'https://wbs.pl/wda__europatagung_2018_-2883.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-35',
    'zyczenia-wielkanocne-3607',
    'Życzenia Wielkanocne',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14173/800x600_kopia_projekt_bez_tytulu1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: center;"><img src="/pub/uploader/images/Ostern20_wysylka.jpg" alt="Ostern20_wysylka.jpg" width="713" height="569" /></div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Życzenia Wielkanocne',
    '',
    'https://wbs.pl/zyczenia_wielkanocne-3607.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-36',
    'projekt-laureaci-pokojowej-nagrody-nobla-klasa-7a-3821',
    'Projekt: Laureaci Pokojowej Nagrody Nobla (Klasa 7a)',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14992/800x600_img_9774.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14995/16cf3a63-1e28-4278-802c-a07f70c45f1a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14995/800x600_16cf3a63-1e28-4278-802c-a07f70c45f1a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14996/a.depta.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14996/800x600_a.depta.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14997/clipboard02.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14997/800x600_clipboard02.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14998/clipboard03.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14998/800x600_clipboard03.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14999/clipboard08.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14999/800x600_clipboard08.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15000/clipboard10.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15000/800x600_clipboard10.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15001/emilia.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15001/800x600_emilia.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15002/emilia1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15002/800x600_emilia1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15003/levin.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15003/800x600_levin.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15005/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15005/800x600_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15006/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15006/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15007/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15007/800x600_3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15008/4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15008/800x600_4.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15009/koppel.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15009/800x600_koppel.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15010/clipboard01.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15010/800x600_clipboard01.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15011/clipboard07.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15011/800x600_clipboard07.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15012/j.czapiewski.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15012/800x600_j.czapiewski.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15104/5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15104/800x600_5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15105/6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15105/800x600_6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15106/7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15106/800x600_7.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Projekt: Laureaci Pokojowej Nagrody Nobla (Klasa 7a)',
    '',
    'https://wbs.pl/projekt_laureaci_pokojowej_nagrody_nobla_klasa_7a-3821.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-37',
    'mistrzostwa-wilanowa-w-siatkowce-3564',
    'Mistrzostwa Wilanowa w siatkówce',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14062/800x600_img_5153.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				4.03 odbyły się mistrzostwa Wilanowa w siatk&oacute;wce, w kt&oacute;rych  wzięli udział chłopcy z naszej szkoły.<br />
Uczniowie 8 klasy zajęli II miejsce i wr&oacute;cili ze srebrnymi medalami.<br />
Gratulujemy!<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14063/img_5148.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14063/800x600_img_5148.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14064/img_5150.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14064/800x600_img_5150.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Mistrzostwa Wilanowa w siatkówce',
    '',
    'https://wbs.pl/mistrzostwa_wilanowa_w_siatkowce-3564.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-38',
    'nauczanie-zdalne-po-feriach-jesiennych-kl-412-3780',
    'Nauczanie zdalne po feriach jesiennych (kl. 4-12)',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14850/800x600_online_unterricht_weiter1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Rodzice, <br />
informujemy, że od poniedziałku<strong> 2.11.2020</strong> r. <strong>w klasach 4-12 będziemy prowadzić zajęcia zdalne</strong>. <br />
<strong>Klasy 1-3 będą nadal uczyć się w systemie stacjonarnym.</strong><br />
Dalsze informacje na temat procedur zostaną przesłane Państwu w dniu jutrzejszym.<br />
&nbsp;<br />
Życzymy Państwu i Państwa dzieciom dobrego czasu odpoczynku<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nauczanie zdalne po feriach jesiennych (kl. 4-12)',
    '',
    'https://wbs.pl/nauczanie_zdalne_po_feriach_jesiennych_kl_412-3780.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-39',
    'koronawirus-obowiazek-noszenia-masek-3623',
    'Koronawirus. Obowiązek noszenia masek.',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14191/800x600_corona-4983357_640.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				15 kwietnia rząd polski doprecyzował obowiązek zakrywania nosa i ust. Podano następujące gł&oacute;wne wyjaśnienia:<br />
<br />
<strong>Od 16 kwietnia, do odwołania,</strong> wprowadzony zostanie obowiązek zakrywania ust i nosa ubraniem, kawałkiem odzieży lub maską. Obowiązek zakrycia nosa i ust obowiązuje:<br />
<br />
- w pojazdach komunikacji zbiorowej oraz w samochodach osobowych (dla os&oacute;b, kt&oacute;re nie mieszkają razem)<br />
- w miejscach otwartych dla publiczności, np. na ulicach i placach, w miejscach pracy i budynkach użyteczności publicznej<br />
(np. w urzędach, szkołach, uczelniach, przychodniach i szpitalach, na poczcie, w bankach i restauracjach), itp.<br />
- w sklepach i targowiskach oraz<br />
- we wsp&oacute;lnie użytkowanych nieruchomościach.<br />
<br />
Zakrywać usta i nos muszą&nbsp; wszyscy. Wprowadzono jednak kilka wyjątk&oacute;w. Należą do nich:<br />
<br />
- dzieci w wieku do 4 lat oraz<br />
- osoby, kt&oacute;re prowadzą działalność zawodową, gospodarczą lub handlową w budynkach, firmach, na rynkach itp. bez kontaktu z klientem.     <br />
<br />
Szczeg&oacute;ły można znaleźć na stronie <a href="https://www.gov.pl/web/koronawirus/zaslon-usta-i-nos">https://www.gov.pl/web/koronawirus/zaslon-usta-i-nos</a>.<br />
<br />
#WBSbleibtzuhause<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Koronawirus. Obowiązek noszenia masek.',
    '',
    'https://wbs.pl/koronawirus_obowiazek_noszenia_masek-3623.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-40',
    'jugend-musiziert-etap-i-regionalny-3869',
    'Jugend musiziert - Etap I regionalny',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15330/800x600_21-01_jugend-musiziert-1002-08937.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Jak zwykle na początku roku odbył się w naszej szkole pierwszy etap -regionalny muzycznego konkursu Jugend musiziert. Zwykle uczniowie mogli dopingować i oglądać występy swoich koleg&oacute;w, w tym roku jednak ze względu na obostrzenia sanitarne konkurs odbywał się bez udziału publiczności.<br />
<br />
We wczorajszym konkursie brało udział 19 uczestnik&oacute;w, z czego 16 przeszło do kolejnego etapu. Jury przyznało wszystkim 1 miejsce. Młodzież prezentowała swe muzyczne talenty w następujących kategoriach: fortepian na cztery ręce, duet pieśń, musical, zespoły perkusyjne, saksofon solo i perkusja.<br />
<br />
Gratulujemy świetnych występ&oacute;w i życzymy radości z tworzenia muzyki.<br />
<br />
Zapraszamy do obejrzenia zdjęć, kt&oacute;re choć trochę przybliżą Wam atmosferę tego wydarzenia.<br />
<br />
Życzymy powodzenia w kolejnych etapach konkursu!<br />
<br />
📸 Marek Kępiński<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15331/21-01_jugend-musiziert-799-08731.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15331/800x600_21-01_jugend-musiziert-799-08731.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15332/21-01_jugend-musiziert-7-07935.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15332/800x600_21-01_jugend-musiziert-7-07935.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15333/21-01_jugend-musiziert-194-08122.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15333/800x600_21-01_jugend-musiziert-194-08122.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15334/21-01_jugend-musiziert-333-08261.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15334/800x600_21-01_jugend-musiziert-333-08261.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15335/21-01_jugend-musiziert-336-08264.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15335/800x600_21-01_jugend-musiziert-336-08264.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15336/21-01_jugend-musiziert-373-08301.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15336/800x600_21-01_jugend-musiziert-373-08301.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15337/21-01_jugend-musiziert-451-08379.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15337/800x600_21-01_jugend-musiziert-451-08379.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15338/21-01_jugend-musiziert-477-08405.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15338/800x600_21-01_jugend-musiziert-477-08405.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15339/21-01_jugend-musiziert-604-08534.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15339/800x600_21-01_jugend-musiziert-604-08534.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15340/21-01_jugend-musiziert-645-08576.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15340/800x600_21-01_jugend-musiziert-645-08576.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15341/21-01_jugend-musiziert-780-08712.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15341/800x600_21-01_jugend-musiziert-780-08712.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15342/21-01_jugend-musiziert-799-08731.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15342/800x600_21-01_jugend-musiziert-799-08731.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15343/21-01_jugend-musiziert-819-08751.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15343/800x600_21-01_jugend-musiziert-819-08751.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15344/21-01_jugend-musiziert-933-08867.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15344/800x600_21-01_jugend-musiziert-933-08867.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15345/21-01_jugend-musiziert-957-08892.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15345/800x600_21-01_jugend-musiziert-957-08892.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/1534',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Jugend musiziert - Etap I regionalny',
    '',
    'https://wbs.pl/jugend_musiziert__etap_i_regionalny-3869.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-41',
    'fahrradprojekt-4003',
    'Fahrrad-Projekt',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15940/800x600_www7.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Na przek&oacute;r pandemii cieszymy się wsp&oacute;lnym muzykowaniem, chociaż wciąż na odległość, jako ch&oacute;r online.  <br />
<strong>Fahrrad Projekt</strong> to kolejny utw&oacute;r przygotowany przez zesp&oacute;ł ch&oacute;ru SchELF jako prezent wakacyjny dla wszystkich pracownik&oacute;w, uczni&oacute;w i rodzic&oacute;w związanych z WBS. <br />
Projekt przygotowała muzycznie i koordynowała p. Teresa Tippe.  <br />
Jego realizacja nie udałaby się bez pomocy p. Reinholda Stubbe, odpowiedzialnego za przygotowanie techniczne oraz Agaty de Mezer, kt&oacute;ra opracowała polski tekst i aranżację ch&oacute;ralną utworu. <br />
Każdy uczestnik brał udział w pr&oacute;bach zdalnie i na własnym sprzęcie zrobił nagrania audio, video oraz zdjęcia do naszego nowego projektu. <br />
Życzymy wszystkim udanych wakacji oraz w nowym roku szkolnym zachęcamy do wsp&oacute;lnego muzykowania. <br />
<br />
<br />
<iframe src="https://www.youtube.com/embed/SSAwYkTiY6I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Fahrrad-Projekt',
    '',
    'https://wbs.pl/fahrradprojekt_-4003.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-42',
    'dodatkowe-materialy-edukacyjne-dla-chetnych-3601',
    'Dodatkowe materiały edukacyjne dla chętnych',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14162/800x600_www2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice,<br />
<br />
w odpowiedzi na Państwa prośby o dodatkowe materiały edukacyjne, udostępniamy Państwu listę link&oacute;w do stron internetowych, kt&oacute;re Państwa dzieci mogą odwiedzać w wolnym czasie.<br />
<u>Zadania te <strong>nie są obowiązkowe</strong>, polecamy je ze względu na ich treści edukacyjne.</u><br />
<br />
<span style="color: rgb(0, 0, 255);"><strong><br />
</strong><span style="font-size: medium;"><strong>Klasa 1- 4:</strong></span></span><br />
<strong><br />
Der kleine B&auml;r und die Gro&szlig;e Wildnis 1 - 5<br />
</strong><br />
https://www.youtube.com/watch?v=w_S_NJS0akU<br />
<br />
https://www.youtube.com/watch?v=GSmRim8gydI<br />
<br />
https://www.youtube.com/watch?v=3ADctnKpV9c<br />
<br />
https://www.youtube.com/watch?v=M4-6PHTD4r0<br />
<br />
https://www.youtube.com/watch?v=WK_9UbSXEbA<br />
<br />
<strong>Janoschs Traumstunde</strong><br />
<br />
Oh, wie sch&ouml;n ist Panama: https://www.youtube.com/watch?v=MRY_s2XYY5U<br />
Post f&uuml;r den Tiger: https://www.youtube.com/watch?v=fniDH7BFWSo<br />
Komm wir finden einen Schatz: https://www.youtube.com/watch?v=ycwbWlWUlDE<br />
Riesenparty beim kleinen Tiger: https://www.youtube.com/watch?v=ycwbWlWUlDE<br />
Der Wettlauf zwischen Hase und Igel: https://www.youtube.com/watch?v=M-3aB41y_vc<br />
<br />
<strong>H&ouml;rb&uuml;cher f&uuml;r Kinder</strong><br />
Drei lustige Gesellen 1. H&ouml;rbuch<br />
https://www.youtube.com/watch?v=geiMBUfLdmo&amp;list=PLBCqvaIr4yUnUb0qjCnzm8NWeqbQnII7-&amp;index=25&amp;t=0s<br />
<br />
Drei Lustige Gesellen 2. H&ouml;rbuch<br />
https://www.youtube.com/watch?v=qJqQiMDiDRg<br />
<br />
Drei Lustige Gesellen 3. H&ouml;rbuch<br />
https://www.youtube.com/watch?v=LlNelD6OlCI<br />
<br />
Drei Lustige Gesellen 4. H&ouml;rbuch<br />
https://www.youtube.com/watch?v=v_Ur07vRIdw<br />
<strong><br />
Filme f&uuml;r die Kinder</strong><br />
&bdquo;Choronavirus Kindern einfach erkl&auml;rt&ldquo; <br />
https://www.youtube.com/watch?v=_kU4oCmRFTw<br />
<br />
&bdquo;Ich mach&lsquo; Dich gesund, sagte der B&auml;r | Janoschs Traumstunde&ldquo;<br />
https://www.youtube.com/watch?v=PbujpAk9k7U<br />
<br />
https://abc.tvp.pl/18057152/gry-i-zabawy<br />
https://www.blinde-kuh.de/index.html<br />
https://www.kidsweb.de/<br />
<br />
Pixi Wissen TV<br />
https://www.google.com/search?q=pixi+wissen+tv&amp;rlz=1C1GTPM_plPL830PL830&amp;oq=www.pixiTVwissen&amp;aqs=chrome.2.69i57j0l7.23996j0j7&amp;sourceid=chrome&amp;ie=UTF-8<br />
<strong><br />
PaL - Polnisch als Landesprache<br />
</strong><br />
https://epodreczniki.pl/<br />
https://www.polskieradio.pl/18,Polskie-Radio-Dzieciom<br />
http://www.scholaris.pl/resources/zasoby/eid/POCZ/sid/POL2<br />
https://wordwall.net/pl<br />
http://pisupisu.pl/klasa1/slowo-na-literke<br />
https://www.wierszedladzieci.pl/<br />
https://learningapps.org/<br />
https://kinderuni.goethe.de/<br />
https://www.bajkowyzakatek.eu/p/spis-tresci.html<br />
https://www.miniminiplus.pl/<br />
http://www.ewa.bicom.pl/<br />
https://ciufcia.pl/<br />
https://czytamsobie.pl/dopobrania.php<br />
https://ninateka.pl/filmy/film,bajki<br />
https://abc.tvp.pl/18057152/gry-i-zabawy<br />
<br />
<strong>PaF - Polnisch als Fremdsprache<br />
</strong><br />
http://kula.gov.pl/<br />
<span style="color: rgb(51, 153, 102);"><strong><br />
</strong></span><span style="font-size: medium;"><span style="color: rgb(51, 153, 102);"><strong>Klasa 5 - 9:</strong></span><br />
</span><br />
<strong>Deutsch<br />
</strong>https://www.orthografietrainer.net/uebung/uebungsauswahl.php<strong><br />
<br />
Geschichte<br />
</strong>https://www.kinderzeitmaschine.de/<strong><br />
<br />
Naturwissenschaften<br />
</strong>https://swr-aktuell-app.swr.de/news/76075/Neue+Online-Lernangebote+fr+Naturwissenschaften/20200402170429 <strong><br />
<br />
Philosophie<br />
</strong>https://www.3sat.de/kultur/kulturzeit/corona-tagebuch-reihe-lang-100.html <strong><br />
</strong><br />
<strong>PaF </strong><br />
http://www.popolskupopolsce.edu.pl<br />
<br />
<span style="font-size: medium;"><span style="color: rgb(255, 0, 255);"><strong><br />
WOLNY DOSTĘP, BIBLIOTEKI CYFROWE</strong></span></span><strong><br />
</strong><br />
<ul>
    <li><strong>WolneLektury.pl</strong></li>
    <li><strong>Lektury.gov.pl</strong></li>
    <li><strong>ChmuraCzytania.pl</strong></li>
    <li><strong>Masz tę moc - ebook o koronawirusie</strong> <a href="https://biblioteka.pl/artykul/Polecamy-Darmowy-ebook-o-koronawirusie/9618#comments">tutaj</a>.</li>
    <li><strong>Polona.pl</strong></li>
    <li><strong>www.empik.com</strong></li>
    <li><strong>Publio - darmowe ebooki</strong></li>
    <li><strong>Wydawnictwo SQN</strong></li>
    <li><strong>Nexto</strong></li>
    <li><strong>Polska-Poezja.pl</strong></',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dodatkowe materiały edukacyjne dla chętnych',
    '',
    'https://wbs.pl/dodatkowe_materialy_edukacyjne_dla_chetnych-3601.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-43',
    'wyniki-ankiety-dotyczacej-elearning-w-szkole-wbs-3616',
    'Wyniki ankiety dotyczącej E-Learning w szkole WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14183/800x600_pl4.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Rodzice, <br />
<br />
w załączeniu znajdą Państwo pismo od Dyrekcji Szkoły dotyczące wynik&oacute;w przeprowadzonej ankiety. <br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					List do Rodziców dotyczący 
				</td>
				<td>
					<a href="pub/cms/files/1308/elternbrief_umfrage_pl.pdf" title="List do Rodziców dotyczący " target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Wyniki ankiety
				</td>
				<td>
					<a href="pub/cms/files/1310/ergebnisse_für_schulöffentlichkeit_-_pl.ok.pdf" title="Wyniki ankiety" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wyniki ankiety dotyczącej E-Learning w szkole WBS',
    '',
    'https://wbs.pl/wyniki_ankiety_dotyczacej_elearning_w_szkole_wbs-3616.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-44',
    'dynia-czy-kartofeldzien-2-3377',
    'Dynia czy kartofel-Dzień 2',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13155/800x600__dsc0520.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<u>Wtorek, 8.10&nbsp; </u>- całodzienne wycieczki<br />
klasy 5: na wykopki<br />
klasy 6: na farmę dyń<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13156/_dsc0540.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13156/800x600__dsc0540.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13157/_dsc0523.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13157/800x600__dsc0523.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13158/_dsc0529.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13158/800x600__dsc0529.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13159/_dsc0549.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13159/800x600__dsc0549.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13160/_dsc0554.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13160/800x600__dsc0554.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13161/_dsc0557.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13161/800x600__dsc0557.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13162/_dsc0559.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13162/800x600__dsc0559.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13163/_dsc0567.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13163/800x600__dsc0567.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13164/_dsc0544.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13164/800x600__dsc0544.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dynia czy kartofel-Dzień 2',
    '',
    'https://wbs.pl/dynia_czy_kartofeldzien_2-3377.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-45',
    'zapytanie-ofertowe-kuchnia-wbs-3477',
    'Zapytanie ofertowe Kuchnia WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13577/800x600_clipboard01.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: center;"><img src="/pub/uploader/images/KUCHNIA1_pl.jpg" alt="KUCHNIA1_pl.jpg" width="500" height="750" /><br />
<br />
<span style="font-size: medium;"><br />
Szczeg&oacute;ły oferty:</span><a href="https://wbs.pl/pub/cms/files/1276/04_12_2019_zapytanie_ofertowe_prowadzenie_kuchni_wbs.pdf"><span style="font-size: medium;">tutaj</span></a></div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Zapytanie ofertowe Kuchnia WBS',
    '',
    'https://wbs.pl/zapytanie_ofertowe_kuchnia_wbs-3477.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-46',
    'wybaczenie-konkurs-fotograficznofilmowy-dla-szkol-organizowany-przez-ambasade-niemiec-3498',
    '"Wybaczenie" konkurs fotograficzno-filmowy dla szkół organizowany przez Ambasadę Niemiec',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13733/800x600_konkurs13.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W ramach drugiej edycji konkursu dla uczni&oacute;w szk&oacute;ł podstawowych&nbsp; i średnich&nbsp; organizowanego przez Ambasadę zapraszamy do przesyłania prac związanych z hasłem &bdquo;WYBACZENIE&rdquo; w kategoriach zdjęcie (lub cykl zdjęć) 📸 oraz film (do 1 minuty) 🎥. <br />
Jury konkursowe czeka na prace poświęcone wybaczeniu w sprawach nie tylko wielkich i historycznych, ale także tych codziennych: szkolnych, domowych, sąsiedzkich, koleżeńskich. 🙂 Pozostawiamy Wam pełną swobodę w artystycznym wyrażeniu Waszego spojrzenia na kwestię wybaczenia.<br />
Prace konkursowe prosimy przesyłać do 10 stycznia 2020 roku poprzez platformę WeTransfer (https: wetransfer.com) na adres mailowy 📨 :<strong> konkurs.wybaczenie@wars.diplo.de</strong> wraz imieniem, nazwiskiem, wiekiem ucznia oraz nazwą szkoły, do kt&oacute;rej uczęszcza.<br />
Rozstrzygnięcie konkursu przewidziane jest pod koniec stycznia 2020 roku.<br />
<br />
Więcej informacji: <a href="https://www.facebook.com/ambasadaniemiec/posts/3180139795393478">https://www.facebook.com/ambasadaniemiec/posts/3180139795393478</a><br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    '"Wybaczenie" konkurs fotograficzno-filmowy dla szkół organizowany przez Ambasadę Niemiec',
    '',
    'https://wbs.pl/wybaczenie_konkurs_fotograficznofilmowy_dla_szkol_organizowany_przez_ambasade_niemiec-3498.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-47',
    'spotkanie-z-rezyserem-jean-christophem-caronem-3424',
    'Spotkanie z reżyserem Jean - Christophem Caronem',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13391/800x600_dsc00234.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				80 lat temu, atakiem wojsk niemieckich na Polskę rozpoczęła się II wojna światowa. W rocznicę tego wydarzenia zaprosiliśmy do naszej szkoły reżysera <strong>Jean - Christopha Carona</strong>, z kt&oacute;rym obejrzeliśmy jego film &bdquo;Polska 39. Jak niemieccy żołnierze zostali mordercami&rdquo;. <br />
Po projekcji rozgorzała dyskusja między uczniami klas 9-12, reżyserem, profesorem Reznikiem &ndash; dyrektorem Niemieckiego Instytutu Historycznego w Warszawie, polskimi i niemieckimi nauczycielami historii, panią Mechthild Hinsberger - Boguski - dyrektorem Szkoły WBS i naszymi gośćmi honorowymi panią Elżbietą  Sobczyńską - Gremblicką i panem Piotrem Lubieńskim - świadkami tamtych lat.<br />
Gł&oacute;wnymi tematami dyskusji były zbrodnie wojenne popełnione przez Niemc&oacute;w, cierpienia ludności polskiej, zr&oacute;żnicowane postawy niemieckich żołnierzy wobec sytuacji życiowej, w kt&oacute;rej żyli i pracowali, wnioski wyciągnięte dla teraźniejszości oraz projekt artystyczny filmu (zwłaszcza wykorzystanie animacji).<br />
To było bardzo udane, pouczające i ciekawe wydarzenie, kt&oacute;re uzupełniło i wzbogaciło &quot;normalne&quot; lekcje historii.<br />
<br />
Norbert St&uuml;we<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13392/dsc00237.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13392/800x600_dsc00237.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13393/dsc00238.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13393/800x600_dsc00238.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Spotkanie z reżyserem Jean - Christophem Caronem',
    '',
    'https://wbs.pl/spotkanie_z_rezyserem_jean__christophem_caronem-3424.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-48',
    'obchody-80-rocznicy-wybuchu-ii-wojny-swiatowej-3326',
    'Obchody 80. rocznicy wybuchu II wojny światowej',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/12868/800x600_wybuch_wojny.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szczeg&oacute;lnym zadaniem naszej szkoły, jako polsko-niemieckiej miejsca spotkań i dialogu, jest celebrowanie rocznic szczeg&oacute;lnych wydarzeń historycznych i tym samym uwrażliwianie naszych uczni&oacute;w na wsp&oacute;lną historię.<br />
<br />
Taką szczeg&oacute;lną dla nas datą jest 1 września 1939, pierwszy dzień II wojny światowej. Jest to data, kt&oacute;rą pamiętać muszą wszyscy uczniowie naszej szkoły.<br />
<br />
30 sierpnia 2019 wraz z panią dyrektor Hinsberger-Boguski uczestniczyliśmy w konferencji w Berlinie, na kt&oacute;rej podkreślaliśmy szczeg&oacute;lną rolę naszej szkoły w obchodach rocznicy wybuchu II światowej.<br />
<br />
2 września mieliśmy zaszczyt zaprosić i spotkać się z panią Elżbietą Gremblicką-Sobczynską świadkiem tamtych przerażających wojennych czas&oacute;w. Po kr&oacute;tkiej przemowie pani dyrektor i historycznym wprowadzeniu, uczniowie klas 9-12 wysłuchali zapierającej dech w piersiach historii świadka, kt&oacute;ry przeżył wojnę. <br />
<br />
Pani Gremblicka-Sobczynska opowiedziała o swych doświadczeniach z dzieciństwa, kt&oacute;re spędziła już w wojennych realiach, o Powstaniu Warszawskim i swoim pobycie w obozie koncentracyjnym w Birkenau. <br />
<br />
Mimo okropności, jakie przeżyła podczas wojny, do oceny postępowania Niemc&oacute;w podchodzi ostrożnie. Najważniejsze teraz jest dla niej uświadamianie młodzieży, by nie popełnili błęd&oacute;w z przeszłości.  <br />
<br />
Rangę uroczystości podniosło przejmujące tło muzyczne, o kt&oacute;re zadbały na pianinie Katarzyna Osohin (10 klasa) oraz Helena K&ouml;ppen und Matylda Kuzinska  (12 klasa).<br />
<br />
Szczeg&oacute;lne podziękowania dla pani Małgorzaty Glinki za zorganizowanie spotkania z panią Elżbietą Gremblicką-Sobczynską.<br />
<br />
Spotkanie zostało zakończone honorowym wpisem gościa do naszej złotej księgi WBS. <br />
<br />
Serdecznie dziękujemy pani Gremblickiej- Sobczynskiej za to spotkanie i z całego serca życzymy wszystkiego dobrego!<br />
<br />
<br />
Norbert St&uuml;we<br />
nauczyciel historii<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/12968/img-20190911-wa0015.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12968/800x600_img-20190911-wa0015.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12969/img-20190911-wa0014.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12969/800x600_img-20190911-wa0014.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12970/img-20190911-wa0003.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12970/800x600_img-20190911-wa0003.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12972/img-20190911-wa0000.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12972/800x600_img-20190911-wa0000.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12973/img-20190911-wa0001.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12973/800x600_img-20190911-wa0001.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12974/img-20190911-wa0007.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12974/800x600_img-20190911-wa0007.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12975/img-20190911-wa0009.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12975/800x600_img-20190911-wa0009.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12976/img-20190911-wa0010.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12976/800x600_img-20190911-wa0010.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Obchody 80. rocznicy wybuchu II wojny światowej',
    '',
    'https://wbs.pl/obchody_80_rocznicy_wybuchu_ii_wojny_swiatowej-3326.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-49',
    'pokonalismy-polio-3783',
    'Pokonaliśmy polio!',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14853/800x600_www1.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Mamy wspaniałą wiadomość dla uczni&oacute;w i nauczycieli Polsko-Niemieckiej Szkoły Spotkań i Dialogu im. Willy''ego Brandta w Warszawie: Afryka pokonała wirus polio!<br />
<br />
Tę długą walkę z wirusem udało się wygrać między innymi dzięki wsparciu Państwa szkoły poprzez zorganizowane dwa biegi sponsorowane- za co w imieniu Rotary Polska i wszystkich dzieci z Afryki serdecznie dziękujemy! <br />
<br />
Zachęcamy do obejrzenia wideo, kt&oacute;re pokazuje jak infrakstruktury polio plus pomocne są także w walce z koronawirusem. <br />
<a href="http://www.dropbox.com/s/p8p0u9xxg9hlbqk/Polio%20Plus%202020.mp4" target="_blank"><br />
www.dropbox.com/s/p8p0u9xxg9hlbqk/Polio%20Plus%202020.mp4</a><br />
<br />
Alexander Heinelt, Prezydent&nbsp; 2020/21, Rotary Club Warszawa Goethe<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Pokonaliśmy polio!',
    '',
    'https://wbs.pl/pokonalismy_polio-3783.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-50',
    'koronawirus-jak-prawidlowo-uzywac-maseczki-i-rekawiczek-filmik-instruktazowy-3632',
    'Koronawirus. Jak prawidłowo używać maseczki i rękawiczek- filmik instruktażowy',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14223/800x600_wwwpl1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Nasza pielęgniarka instruuje nas, jak poprawnie korzystać z maseczek i rękawiczek jednorazowych.<br />
Obejrzyjcie filmik i stosujcie w praktyce!<br />
<br />
<iframe src="https://www.youtube.com/embed/uJHAw2yRJiA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Koronawirus. Jak prawidłowo używać maseczki i rękawiczek- filmik instruktażowy',
    '',
    'https://wbs.pl/koronawirus_jak_prawidlowo_uzywac_maseczki_i_rekawiczek_filmik_instruktazowy_-3632.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-51',
    'study-in-germany-online-information-sessions-europe-2020-3571',
    'Study in Germany - Online Information Sessions Europe 2020',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14073/800x600_strona_internetowa.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				DAAD Niemiecka Centrala Wymiany Akademickiej zaprasza <strong>25 i 26 marca</strong> na spotkanie <strong>online </strong>dotyczące studi&oacute;w w Niemczech. W programie seria spotkań z 10 niemieckimi uczelniami wyższymi oraz ich studentami i absolwentami, kt&oacute;rym będzie można zadawać pytania dotyczące studi&oacute;w na tych uczelniach. <br />
<br />
Udział w webinarach jest <strong>bezpłatny, </strong>ale wymagana jest wcześniejsza rejestracja.<br />
<br />
Spotkania są prowadzone w języku angielskim.<br />
<br />
<a href="https://daad-publish.reflact.com/content/connect/c1/7/en/events/event/private/21682/11049428/event_landing.html?sco-id=10908204&amp;campaign-id=DAAD_Warschau_4&amp;_charset_=utf-8"><br />
Szczeg&oacute;ły, program i rejestracja (http://daad.reflact.com/studyingermany_europe2020/event/event_info.html?campaign-id=DAAD_Warschau_4)</a><br />
<br />
Zapraszamy naszych uczni&oacute;w ostatnich klas do udziału w spotkaniu.<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Study in Germany - Online Information Sessions Europe 2020',
    '',
    'https://wbs.pl/_study_in_germany__online_information_sessions_europe_2020-3571.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-52',
    'zawody-w-badmintona-3509',
    'Zawody w badmintona',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13812/800x600_dsc00256.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				7 listopada byliśmy gospodarzami zawod&oacute;w w badmintona. <br />
2 miejsce zdobyli Julian Czapiewski i Michal Franciszkowski.<br />
3 miejsce zajęły Basia Grątkowska, Emelie Lindholm, Ala Błażeczek i Julia Hyllus.<br />
<br />
Gratulujemy wszystkim uczestnikom!<br />
<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13813/dsc00257.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13813/800x600_dsc00257.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13814/dsc00262.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13814/800x600_dsc00262.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13815/dsc00263.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13815/800x600_dsc00263.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13816/dsc00265.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13816/800x600_dsc00265.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13817/dsc00266.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13817/800x600_dsc00266.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13818/dsc00267.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13818/800x600_dsc00267.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13819/dsc00268.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13819/800x600_dsc00268.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13820/dsc00269.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13820/800x600_dsc00269.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13821/dsc00270.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13821/800x600_dsc00270.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Zawody w badmintona',
    '',
    'https://wbs.pl/zawody_w_badmintona-3509.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-53',
    'dezynfekcja-budynku-szkoly-3605',
    'Dezynfekcja budynku szkoły',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14170/800x600_img_20200331_155423.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Państwo,<br />
<br />
w dniach 9.04.-11.04.2020 roku w związku z zaplanowaną dezynfekcją budynek szkoły jest zamknięty.<br />
<br />
<strong>W tym okresie zabroniony jest wstęp do wszystkich pomieszczeń szkolnych.</strong><br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dezynfekcja budynku szkoły',
    '',
    'https://wbs.pl/dezynfekcja_budynku_szkoly-3605.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-54',
    'rozpoczecie-roku-szkolnego-3304',
    'Rozpoczęcie roku szkolnego',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/12594/800x600_schulbeginn19-37.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<strong>Drodzy Uczniowie, Drodzy Rodzice, Drogie Koleżanki, Drodzy Koledzy, </strong><br />
<br />
witamy Wszystkich na rozpoczęciu roku szkolnego 2019/2020. Mamy nadzieję, że wszyscy dobrze wypoczęliście.&nbsp; Witamy Was dzisiaj dosyć nietypowo, bo witamy Was wierszem:<br />
<br />
J<em>uż od dawna każdy wie,<br />
że człowiek uczyć się chce.<br />
<br />
Wznieść się na mądrości wyżyny<br />
nie tylko z abecadła przyczyny.<br />
<br />
Nie tylko czytanie i pisanie <br />
Sprawi, że człowiek rozumnym się stanie.<br />
<br />
Nie tylko liczenie i rachowanie<br />
To dla jego rozumu jedyne wyzwanie.<br />
<br />
Lecz powinien dla przyjemności <br />
słuchać nauki mądrości. (Wilhelm Busch)<br />
</em><br />
<br />
Max i Moritz to usłyszeli od Wilhelma Buscha, co i dziś jest ważne , co i dziś porusza.<br />
Że piszemy, czytamy, obliczamy w miejscu - nowym i nowoczesnym. Za coś oczywistego uważamy, że podoba się to dzieciom wsp&oacute;łczesnym.<br />
<br />
Dla nas w wierszu Wilhelma Buscha są dwie rzeczy - to nas porusza. Mądrość i przyjemność - to one sprawiają, że powodzeniu dnia w szkole cały sens nadają. <br />
<br />
Mądrość oznacza prośbę, wdzięczność, przywitanie, nie wzgardę dla innych, lecz poszanowanie.<br />
<br />
Przyjemność - tłumaczyć nie trzeba. To radość i zabawa. I wszystko, co daje do sukcesu prawa.<br />
<br />
Życzymy powodzenia, uśmiechu, wytrwałości! Wielkie serca niech z małych spraw wielkich nie czynią.<br />
Uczmy się szacunku, dobroci i miłości.<br />
<br />
<br />
Miło nam zn&oacute;w Was widzieć! <br />
<br />
Wszystkiego dobrego i przyjemności w kontynuowaniu nauki w WBS<br />
<br />
Powodzenia i sukces&oacute;w :)<br />
<br />
Małgorzata Wr&oacute;bel<br />
Dyrektor Pionu Polskojęzycznego<br />
<br />
<br />
<br />
Fotos: Marek Kępinski<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/12595/schulbeginn19-38.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12595/800x600_schulbeginn19-38.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12596/schulbeginn19-17.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12596/800x600_schulbeginn19-17.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12597/schulbeginn19-44.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12597/800x600_schulbeginn19-44.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12598/schulbeginn19-53.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12598/800x600_schulbeginn19-53.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12599/schulbeginn19-57.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12599/800x600_schulbeginn19-57.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12600/schulbeginn19-68.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12600/800x600_schulbeginn19-68.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12601/schulbeginn19-85.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12601/800x600_schulbeginn19-85.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12602/schulbeginn19-108.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12602/800x600_schulbeginn19-108.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12603/schulbeginn19-168.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12603/800x600_schulbeginn19-168.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12604/schulbeginn19-186.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12604/800x600_schulbeginn19-186.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12605/schulbeginn19-198.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12605/800x600_schulbeginn19-198.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12606/schulbeginn19-212.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12606/800x600_schulbeginn19-212.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12607/schulbeginn19-267.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12607/800x600_schulbeginn19-267.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12608/schulbeginn19-287.jpg" ',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Rozpoczęcie roku szkolnego',
    '',
    'https://wbs.pl/rozpoczecie_roku_szkolnego-3304.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-55',
    'webinarium-pandemia-covid19-z-dr-med-pawlem-grzesiowskim-3778',
    'Webinarium „Pandemia COVID-19” z dr med. Pawłem Grzesiowskim',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14847/800x600_www.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W czwartek 8.10 pracownicy Campusu im. Willy&rsquo;ego Brandta wraz z rodzicami uczni&oacute;w i przedszkolak&oacute;w mieli okazję uczestniczyć  w webinarium &bdquo;Pandemia COVID-19&rdquo; z dr med. Pawłem Grzesiowskim.<br />
Dr med. Grzesiowski jest wybitnym immunologiem, specjalistą w dziedzinie profilaktyki zakażeń i prezesem Fundacji Instytut Profilaktyki Zakażeń. Po prezentacji  przedstawiającej najważniejsze fakty i zagrożenia wynikające z rozprzestrzeniania się koronawirusa w naszym kraju i na świecie rozpoczęła się część dyskusyjna, podczas kt&oacute;rej wszyscy uczestnicy mogli zadawać pytania.<br />
Serdecznie dziękujemy dr med. Grzesiowskiemu za cenne, merytoryczne spotkanie, dzięki kt&oacute;remu łatwiej nam, dyrekcji, pracownikom, rodzicom będzie podejmować decyzje w tej dynamicznie rozwijającej się sytuacji epidemicznej.<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Webinarium „Pandemia COVID-19” z dr med. Pawłem Grzesiowskim',
    '',
    'https://wbs.pl/webinarium__pandemia_covid19__z_dr_med_pawlem_grzesiowskim-3778.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-56',
    'projekt-muzyczny-online-3651',
    'Projekt muzyczny ONLINE',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14322/800x600_www2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drogie uczennice, uczniowie i miłośnicy muzyki,<br />
<br />
Akademia Muzyczna WBS zaprasza wszystkich swoich uczni&oacute;w oraz uczni&oacute;w Polsko-Niemieckiej Szkoły Spotkań i Dialogu do wzięcia udziału w niezwykłym projekcie muzycznym ONLINE, w kt&oacute;rym zagramy wsp&oacute;lnie utw&oacute;r pozostając w domach. Wszyscy, kt&oacute;rzy grają na instrumentach, śpiewają  i chcą wziąć w nim udział proszeni są o kontakt mailowy: <strong>akademiamuzyczna@wbs</strong>.pl lub telefoniczny: <strong>795 801 234<br />
</strong><br />
<strong>Termin zgłoszeń: </strong><span style="color: rgb(255, 0, 0);">14.05.2020<br />
</span><br />
Do zobaczenia!<br />
<br />
Kierownik Akademii Muzycznej WBS<br />
Marcin Lemiszewski <br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Projekt muzyczny ONLINE',
    '',
    'https://wbs.pl/projekt_muzyczny_online-3651.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-57',
    'wirtualny-spacer-po-wystawie-willy-brandt-1913-1992-zycie-dla-wolnosci-pokoju-i-pojednania-miedzy-narodami-4004',
    'Wirtualny spacer po wystawie - Willy Brandt 1913 – 1992. Życie dla wolności, pokoju i pojednania między narodami.',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15916/800x600_www.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Od kwietnia jesteśmy gospodarzami wystawy<strong> &bdquo;Willy Brandt 1913 &ndash; 1992. Życie dla wolności, pokoju i pojednania między narodami&rdquo;</strong>, kt&oacute;ra została nam udostępniona przez Fundację Willy-Brandt-Stiftung z Berlina. <br />
Z powodu pandemii koronawirusa mogli ja obejrzeć tylko nieliczni. Wystawa ta pokazuje 10 ważnych historycznych miejsc oraz wydarzeń, kt&oacute;re odegrały ważną rolę w życiu Willy&rsquo;ego Brandta.<br />
<br />
Zapraszamy Państwa na wirtualny spacer po wystawie oraz do galerii zdjęć 👉 https://bit.ly/35zEJ8u. <br />
Życzymy miłego oglądania 😊.<br />
<br />
<iframe src="https://www.youtube.com/embed/Hk4ZTnCOkac" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wirtualny spacer po wystawie - Willy Brandt 1913 – 1992. Życie dla wolności, pokoju i pojednania między narodami.',
    '',
    'https://wbs.pl/wirtualny_spacer_po_wystawie__willy_brandt_1913___1992_zycie_dla_wolnosci_pokoju_i_pojednania_miedzy_narodami-4004.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-58',
    'powitanie-pierwszych-klas-3713',
    'Powitanie pierwszych klas',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14644/800x600_20-08_schulbeginn-21-561.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				27.09 przywitaliśmy w naszej szkole pierwszoklasist&oacute;w. Zgodnie z naszą tradycją każdy nowy uczeń trzymał od starszego kolegi specjalnie przygotowany rożek pełen niespodzianek 🎉.<br />
Życzymy naszym nowym uczennicom i uczniom wszystkiego najlepszego w WBS 🌻🍀<br />
<br />
Zdjęcia: Marek Kępiński<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14645/20-08_schulbeginn-5-533.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14645/800x600_20-08_schulbeginn-5-533.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14646/20-08_schulbeginn-15-82.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14646/800x600_20-08_schulbeginn-15-82.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14647/20-08_schulbeginn-20-138.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14647/800x600_20-08_schulbeginn-20-138.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14648/20-08_schulbeginn-25-144.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14648/800x600_20-08_schulbeginn-25-144.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14649/20-08_schulbeginn-27-172.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14649/800x600_20-08_schulbeginn-27-172.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14650/20-08_schulbeginn-29-178.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14650/800x600_20-08_schulbeginn-29-178.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14651/20-08_schulbeginn-34-218.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14651/800x600_20-08_schulbeginn-34-218.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14652/20-08_schulbeginn-57-258.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14652/800x600_20-08_schulbeginn-57-258.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14653/20-08_schulbeginn-69-328.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14653/800x600_20-08_schulbeginn-69-328.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14654/20-08_schulbeginn-73-350.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14654/800x600_20-08_schulbeginn-73-350.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14655/20-08_schulbeginn-85-797.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14655/800x600_20-08_schulbeginn-85-797.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14656/20-08_schulbeginn-94-414.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14656/800x600_20-08_schulbeginn-94-414.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14657/20-08_schulbeginn-96-416.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14657/800x600_20-08_schulbeginn-96-416.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14658/20-08_schulbeginn-102-444.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14658/800x600_20-08_schulbeginn-102-444.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Powitanie pierwszych klas',
    '',
    'https://wbs.pl/powitanie_pierwszych_klas-3713.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-59',
    'dachllieder-nasze-uczennice-w-finale-3594',
    'DACHL-Lieder - Nasze uczennice w finale',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14103/800x600_logo_dachl.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Trzy uczennice  naszej szkoły, w tym dwie z Akademii Muzycznej WBS, zakwalifikowały się do finału konkursu piosenki DACHL: Julia Lubczyk, Emilia Chałas i Zuzanna K&uuml;hl. Gratulujemy bardzo gorąco!<br />
Konkurs piosenki niemieckiej DACHL powinien odbyć się w marcu. Termin został przesunięty ze względu na pandemię koronawirusa. Dokładna data wydarzenia nie została jeszcze ustalona. <br />
<br />
Dyrektor Akademii Muzycznej WBS<br />
Marcin Lemiszewski<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14147/20200116_152426.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14147/800x600_20200116_152426.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14148/img_20191123_132408.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14148/800x600_img_20191123_132408.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14149/img_20191123_133643.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14149/800x600_img_20191123_133643.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'DACHL-Lieder - Nasze uczennice w finale',
    '',
    'https://wbs.pl/dachllieder__nasze_uczennice_w_finale-3594.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-60',
    'serdeczne-zyczenia-dla-mam-3670',
    'Serdeczne życzenia dla Mam!',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14365/800x600_www.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drogie Mamy, wszystkiego najlepszego w dniu Waszego święta.💐💗🎊<br />
Uczniowie i uczennice naszej szkoły przygotowali szczeg&oacute;lny prezent dla swoich mam. Zobaczcie sami!<br />
<br />
<iframe src="https://www.youtube.com/embed/dS4uBdpjqFE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Laurki dla Mam od klasy 1C
				</td>
				<td>
					<a href="pub/cms/files/1334/laurka_dla_mamy.pdf" title="Laurki dla Mam od klasy 1C" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Serdeczne życzenia dla Mam!',
    '',
    'https://wbs.pl/serdeczne_zyczenia_dla_mam-3670.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-61',
    'koronawirus-ii-etap-znoszenia-ograniczen-3641',
    'Koronawirus. II etap znoszenia ograniczeń.',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14295/800x600_2_etap2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: justify;">Drodzy Rodzice, <br />
<br />
po konferencji prasowej premiera M. Morawieckiego i ministra zdrowia Ł. Szumowskiego dotyczącej dalszych działań w zwiążku z pandemią koronawirusa&nbsp; z dnia 29.04 przedstawiamy najważniejsze punkty:</div>
<ul>
    <li style="text-align: justify;">Od 6 maja będą otwarte żłobki i przedszkola.  Decyzja o otwarciu danej plac&oacute;wki należeć będzie do organu prowadzącego. Ministerstwo Zdrowia sformułuje warunki, a rząd zapewni środki dezynfekujące i wyposażenie ochronne.</li>
    <li style="text-align: justify;">Muzea, biblioteki zostaną ponownie otwarte - w zależności od obszaru i możliwości zapewnienia niezbędnych odległości.</li>
    <li style="text-align: justify;">W drugim etapie otwarcia duża odpowiedzialność spoczywa na organach prowadzących żłobki i przedszkola.&nbsp; Sytuacja w poszczeg&oacute;lnych powiatach/wojew&oacute;dztwach jest zr&oacute;żnicowana. Decyzja o otwarciu plac&oacute;wki będzie podejmowana przez dyrekcję indywidualnie, ale&nbsp;po uwzględnieniu m.in. wytycznych Gł&oacute;wnego Inspektora Sanitarnego.</li>
</ul>
<div style="text-align: justify;"><strong>Mając na uwadze troskę o zapewnienie bezpiecznych warunk&oacute;w przebywania w naszych plac&oacute;wkach dzieci i pracownik&oacute;w Organ Prowadzący we wsp&oacute;łpracy z Dyrekcją Przedszkola i Szkoły podjął uchwałę o dostosowaniu terminu otwarcia przedszkola, funkcjonującego w ramach campusu im. Willy&rsquo;ego Brandta do terminu otwarcia szkoły czyli 25.05.2020. (Aktualizacja dnia 4.05)<br />
<br />
</strong></div>
Otwarcie szk&oacute;ł dla niższych klas będzie możliwe w&nbsp; dalszym etapie znoszenia ograniczeń. Podczas tych etap&oacute;w możliwa będzie opieka nad tymi dziećmi, kt&oacute;rych rodzice muszą wr&oacute;cić do pracy. Ponieważ jest to większa grupa, zostanie wydane oddzielne ogłoszenie.
<div style="text-align: justify;"><br />
Szczeg&oacute;łowe informacje można znaleźć w komunikacie prasowym Ministerstwa Zdrowia: <a href="https://www.gov.pl/web/premier/premier-od-4-maja-drugi-etap-znoszenia-ograniczen-zwiazanych-z-koronawirusem">https://www.gov.pl/web/premier/premier-od-4-maja-drugi-etap-znoszenia-ograniczen-zwiazanych-z-koronawirusem. </a><br />
<br />
<br />
<u><strong>Aktualizacja dotycząca zniesienia obowiążkowej kwarantanny:</strong></u><br />
<br />
Od poniedziałku, 4 maja 2020 r. osoby podr&oacute;żujące między Polską a Niemcami, Czechami, Słowacją, Litwą, Szwecją i Danią w celach zawodowych, służbowych lub zarobkowych (z wyjątkiem os&oacute;b wykonujących zaw&oacute;d medyczny i zatrudnionych w ośrodkach pomocy społecznej) albo w celu pobierania nauki nie będą objęte obowiązkową 14-dniową kwarantanną.<br />
<br />
Przekroczenie granicy w celach zawodowych, służbowych, zarobkowych albo w celu nauki w RP lub państwie sąsiadującym należy udokumentować funkcjonariuszowi Straży Granicznej podczas kontroli na granicy, przedstawiając np. umowę o pracę oraz dokument potwierdzający zameldowanie lub zamieszkanie w Polsce.<br />
<br />
<br />
Wiecej informacji: https://www.gov.pl/web/dania/zniesienie-obowiazkowej-kwarantanny-dla-pracownikow-transgranicznych<br />
<br />
<br />
Będziemy Państwa informować na bieżąco kolejnych podjętych krokach.<br />
&nbsp;</div>
<div>Życzymy dużo zdrowia!</div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Koronawirus. II etap znoszenia ograniczeń.',
    '',
    'https://wbs.pl/koronawirus_ii_etap_znoszenia_ograniczen-3641.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-62',
    'warsztaty-z-osoba-niewidoma-3469',
    'Warsztaty z osobą niewidomą',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13530/800x600_20191127_080923.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W ubiegłym tygodniu uczniowie klas 1-4 spotkali się z panem Sebastianem Grzywaczem, kt&oacute;ry w wyniku wypadku stracił wzrok, przewodnikiem na Niewidzialnej Wystawie, założycielem Fundacji Ponad Słowami. Panu Sebastianowi towarzyszył jego pies asystujący &ndash; Rollek. Podczas warsztat&oacute;w zabrali oni dzieci w podr&oacute;ż do świata os&oacute;b niewidomych. Dzieci przekonały się, że doświadczać można nie tylko zmysłem wzroku.&nbsp; Dowiedziały się, jak pomagać osobom niewidomym, a także poznały technologie, kt&oacute;re ułatwiają im codzienne funkcjonowanie. Z dużym entuzjazmem uczniowie przywitali Rollka, kt&oacute;ry uważnie i dzielnie pomaga swojemu właścicielowi w bezpiecznym poruszaniu się. <br />
Była to bardzo ważna lekcja wrażliwości, empatii i uważności.    <br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13531/20191127_080936.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13531/800x600_20191127_080936.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13532/20191127_100605.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13532/800x600_20191127_100605.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13533/20191127_103502.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13533/800x600_20191127_103502.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Warsztaty z osobą niewidomą',
    '',
    'https://wbs.pl/warsztaty_z_osoba_niewidoma-3469.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-63',
    'wizyta-eksperta-w-wbs-dr-florian-reil-z-giz-opowiada-o-zrownowazonej-uprawie-bawelny-3973',
    'Wizyta eksperta w WBS: dr Florian Reil z GIZ opowiada o zrównoważonej uprawie bawełny',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15751/800x600_screen-shot,_19.04.21,_jg._11_12,_giz,_reil.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<span style="font-size: larger;"><strong>Wizyta eksperta w WBS: dr Florian Reil z GIZ opowiada o zr&oacute;wnoważonej uprawie bawełny</strong></span><br />
<br />
<br />
<div style="text-align: justify;">Prawie każdy z nas codziennie ma na sobie bawełniane ubranie, czy to w formie zwykłych dżins&oacute;w, czy zwiewnej letniej sukienki. W UE to naturalne wł&oacute;kno stanowi 43 procent wszystkich wł&oacute;kien tekstylnych wykorzystywanych w produkcji odzieży. 350 milion&oacute;w ludzi pracuje w sektorze bawełny, a ponad 80 kraj&oacute;w na świecie produkuje bawełnę. Ale gdzie i w jakich warunkach jest ona produkowana?<br />
Dzięki wizycie eksperta dr Florian Reila z Londynu uczniowie klas 11 i 12 mieli okazję zmierzyć się z tymi pytaniami i zapoznać się z koncepcjami zr&oacute;wnoważonego rozwoju.<br />
W dniu 19.04.2021 r. odbyło się spotkanie online dr Florian Reila z klasą biologiczną pani Schallschmidt. Podczas spotkania przedstawił swoją niezwykle interesującą pracę w GIZ (Deutsche Gesellschaft f&uuml;r Internationale Zusammenarbeit), kt&oacute;ra obecnie osiąga obroty handlowe w wysokości 3,1 miliarda euro. &quot;GIZ stawia sobie za cel poprawę warunk&oacute;w życia producent&oacute;w surowc&oacute;w w rolniczych łańcuchach dostaw i w tym celu realizuje na całym świecie 1600 projekt&oacute;w&quot; - poinformował zaproszony ekspert.<br />
<br />
<br />
GIZ jest sp&oacute;łką z ograniczoną odpowiedzialnością (GmbH), a jedynym udziałowcem jest Republika Federalna Niemiec.<br />
Większość swoich kontrakt&oacute;w otrzymuje za pośrednictwem niemieckiego Ministerstwa Wsp&oacute;łpracy Gospodarczej i Rozwoju Niemiec i jest jego gł&oacute;wnym partnerem w kwestiach dotyczących zr&oacute;wnoważonego rozwoju. <br />
Naszych uczni&oacute;w mniej interesowała koncepcja (ekologicznego) zr&oacute;wnoważonego rozwoju, ale przede wszystkim codzienna praca dr Reila, chociażby ta w Maroku i Burkina Faso, gdzie szkolił rolnik&oacute;w w zakresie wydajnej uprawy bawełny. <br />
<br />
Uprawa bawełny przez drobnych rolnik&oacute;w wymaga tylko jednej dwunastej pestycyd&oacute;w potrzebnych do produkcji bawełny produkowanej wyłącznie maszynowo, jednak ta praca musi być wspierana, powiedział ekspert. Bawełna produkowana maszynowo w USA jest w większości modyfikowana genetycznie. Jedna z uczennic  zapytała, co GIZ robi w sprawie pracy dzieci na plantacjach bawełny w Burkina Faso. Pan Reil wyjaśnił następnie bardzo wyraźnie, że problem ten jest złożony i że pracę dzieci można zminimalizować przede wszystkim dzięki wyższym dochodom rodzic&oacute;w, jak r&oacute;wnież bardziej wydajnym zbiorom. Tematyka spotkania zainspirowała część uczni&oacute;w do dalszych dyskusji i pogłębienia tematyki związanej z uprawą bawełny. Pod koniec spotkania uznali, że &quot;bardzo fajnie&quot; i &quot;dość ekscytująco&quot; było zetknąć się z &quot;zupełnie innym i życiowym tematem&quot;, kt&oacute;ry jest &quot;niezwykle ważny&quot; i podziękowali za spotkanie gromkimi brawami.<br />
<br />
Chcielibyśmy podziękować dr Reilowi za to pouczające spotkanie i przekazanie merytorycznej wiedzy z zakresu ekologii w spos&oacute;b przystępny dla uczni&oacute;w.</div>
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wizyta eksperta w WBS: dr Florian Reil z GIZ opowiada o zrównoważonej uprawie bawełny',
    '',
    'https://wbs.pl/wizyta_eksperta_w_wbs_dr_florian_reil_z_giz_opowiada_o_zrownowazonej_uprawie_bawelny-3973.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-64',
    'aktualizacja-wytyczne-dotyczace-nauczania-stacjonarnego-i-zdalnego-w-wbs-3702',
    'Aktualizacja_Wytyczne dotyczące nauczania stacjonarnego i zdalnego w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14578/800x600_img_20200520_173103_neu.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Wytyczne stan na 08.09.2020
				</td>
				<td>
					<a href="pub/cms/files/1367/wytyczne_dotyczace_nauczania_stacjonarnego_i_zdalnego_w_wbs_08.09.2020.pdf" title="Wytyczne stan na 08.09.2020" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Aktualizacja_Wytyczne dotyczące nauczania stacjonarnego i zdalnego w WBS',
    '',
    'https://wbs.pl/aktualizacja_wytyczne_dotyczace_nauczania_stacjonarnego_i_zdalnego_w_wbs-3702.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-65',
    'wystepy-naszych-uczniow-w-pierwszej-piatce-3408',
    'Występy naszych uczniów w "Pierwszej Piątce"',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13364/800x600_www2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				26 października 2019 odbył się w I Zborze Kościoła Chrześcijan Baptyst&oacute;w w Warszawie koncert uczni&oacute;w warszawskich szk&oacute;ł muzycznych I st. zatytułowany &quot;Pierwsza Piątka&quot; organizowany przez Państwową Szkołę Muzyczną I st. nr 1 im. Oskara Kolberga w Warszawie. Wśr&oacute;d licznych szk&oacute;ł muzycznych wystąpili r&oacute;wnież uczniowie naszej szkoły i Akademii Muzycznej WBS: Sara Lobnig&nbsp; z utworem Alicii Keys pt. &quot;If Ain''t Got you&quot; (śpiew) oraz Michał Henschel z utworem Gustawa Petera &quot;Wspomnienie cyrku Renz&quot; (ksylofon). Koncert zakończył występ międzynarodowej orkiestry składającej się z uczni&oacute;w z Niemiec, Litwy i Polski.<br />
<br />
Marcin Lemiszewski <br />
Dyrektor Akademii Muzycznej WBS <br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13365/20191026_121133.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13365/800x600_20191026_121133.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13366/20191026_120826a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13366/800x600_20191026_120826a.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Występy naszych uczniów w "Pierwszej Piątce"',
    '',
    'https://wbs.pl/wystepy_naszych_uczniow_w_pierwszej_piatce-3408.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-66',
    'muzyczna-kartka-swiateczna-od-szkolnego-choru-schelf-3839',
    'Muzyczna kartka świąteczna od szkolnego chóru SchELF',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15163/800x600_www8.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Z okazji nadchodzących Świąt Bożego Narodzenia nasz szkolny ch&oacute;r SchELF, składający się z uczni&oacute;w, rodzic&oacute;w, nauczycieli i przyjaci&oacute;ł WBS przygotował dla Państwa muzyczną kartkę z kolędami. <br />
<br />
Nad projektem, koordynowanym przez p. Teresę Tippe pracowało 17 os&oacute;b. <br />
<br />
Uczestnikom dziękujemy za doznania muzyczne, jakich nam dostarczyli, zaangażowanie i wprowadzenie nas w świąteczną atmosferę, a panu Stubbe za oprawę techniczną. <br />
<br />
Życzymy zdrowych i spokojnych Świąt Bożego Narodzenia i mile spędzonego czasu przy wsp&oacute;lnym kolędowaniu. <br />
Cieszmy się zatem tą niepowtarzalną atmosferą Świąt. Niech ich magia udzieli się nam wszystkim, napełni nasze serca spokojem, radością oraz doda nam sił do realizacji plan&oacute;w i spełnienia marzeń w Nowym 2021 Roku. <br />
<br />
Mechthild Hinsberger-Boguski - Dyrektor Szkoły WBS<br />
Małgorzata Wr&oacute;bel - Dyrektor Pionu Polskojęzycznego w Szkole Podstawowej i LO<br />
Teresa Tippe - koordynator projektu<br />
<br />
<br />
<iframe src="https://www.youtube.com/embed/J32RgHK_gwk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Muzyczna kartka świąteczna od szkolnego chóru SchELF',
    '',
    'https://wbs.pl/muzyczna_kartka_swiateczna_od_szkolnego_choru_schelf-3839.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-67',
    'projekt-muzyczny-online-try-everything-akademii-muzycznej-wbs-i-wbs-3692',
    'Projekt muzyczny online "Try Everything" Akademii Muzycznej WBS i WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14544/800x600_www2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice, <br />
drogie uczennice i uczniowie, <br />
mamy pow&oacute;d do radości<img src="https://wbs.pl/cms/class/extends/fckeditor/editor/images/smiley/msn/regular_smile.gif" alt="" />. Oto przed Wami projekt muzyczny online Akademii Muzycznej WBS&nbsp;i szkoły WBS oparty na motywie utworu &quot;Try Everything&quot; Shakiry z filmu Zootopia/Zwierzogr&oacute;d. <br />
Wzięło w nim udział blisko 50 os&oacute;b w tym uczniowie, rodzice i nauczyciele. <br />
Ze względu na panującą sytuację epidemiologiczną wszyscy uczestnicy nagrywali swoje partie w domowych warunkach, bez możliwości spotkania się. Było to dla nas nie lada wyzwaniem, ale słowa Shakiry motywowały do działania: &bdquo;I won''t give up, no I won''t give in Till I reach the end&rdquo; . <br />
Przed Wami nagranie, kt&oacute;rym chcieliśmy pokazać, że muzyka jest dla nas bardzo ważna, a jej tworzenie sprawia dużo radości, szczeg&oacute;lnie w trudnych momentach. <br />
Życzę miłego słuchania! <br />
<br />
Marcin Lemiszewski <br />
Dyrektor Akademii Muzycznej WBS<br />
<br />
<iframe src="https://www.youtube.com/embed/E-VhGimBcyk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
Marek Lipski - aranżacja, mix i mastering dźwięku<br />
Hubert Drabik - montaż obrazu <br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Projekt muzyczny online "Try Everything" Akademii Muzycznej WBS i WBS',
    '',
    'https://wbs.pl/projekt_muzyczny_online_try_everything_akademii_muzycznej_wbs_i_wbs-3692.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-68',
    'wbsbleibtzuhause-do-2405-3637',
    '#WBSbleibtzuhause do 24.05',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14227/800x600_www1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy rodzice,<br />
ze względu na duże znaczenie tych wiadomości, prezentujemy podsumowanie z dzisiejszej konferencji prasowej ministra zdrowia Ł. Szumowskiego, ministra edukacji D. Piontkowskiego i ministra nauki i szkolnictwa wyższego W. Murdzka.<br />
<br />
<br />
1. Minister edukacji D. Piontkowski:<br />
<br />
- <strong>Obecna sytuacja epidemiologiczna nie dopuszcza otwarcie szk&oacute;ł, przedszkoli i żłobk&oacute;w. Będą zamknięte do 24 maja.</strong> Za kilka dni będą dostępne informacje, czy obiekty te będą w stanie działać przynajmniej częściowo.<br />
<br />
- Egzaminy maturalne rozpoczną się 8 czerwca i powinny być przeprowadzane wyłącznie w formie pisemnej. Od początku lipca przewidziane są dodatkowe terminy dla uczni&oacute;w, kt&oacute;rzy ze względ&oacute;w zdrowotnych nie mogą uczestniczyć w pierwszym terminie.<br />
<br />
- W okresie 16.06.-18.06. planowane są egzaminy końcowe w szkołach podstawowych.<br />
<br />
- Od 22.06. egzaminy zawodowe w szkołach branżowych i technicznych, od sierpnia egzaminy zawodowe dla dorosłych uczni&oacute;w szk&oacute;ł zawodowych ((egzamin zawodowy&nbsp;( formuła 2019) - 17-28 sierpnia))<br />
<br />
- Egzaminy powinny odbyć się stacjonarnie, ale przy zachowaniu rygor&oacute;w bezpieczeństwa.<br />
<br />
<span style="font-size: medium;"><span style="color: rgb(255, 0, 0);"><strong>Dokładne daty egzamin&oacute;w w WBS nie zostały jeszcze potwierdzone. Wkr&oacute;tce o nich Państwa poinformujemy.</strong></span></span><span style="font-size: larger;"><span style="color: rgb(255, 0, 0);"><strong><br />
</strong></span></span><br />
2. Minister nauki W.Murdzek:<br />
<br />
-Podtrzymana jest zasada, że matury są wyznacznikiem jakościowym w rekrutacji na studia. <br />
-Kursy i studia na uniwersytetach pozostają prowadzone zdalnie do 24 maja.<br />
<br />
<br />
3. Minister zdrowia Ł. Szumowski<br />
<br />
- W okresie Świąt Wielkanocnych Polacy zachowywali się bardzo rozsądnie, w większości pozostali w domu, nie odnotowano więc znaczącego wzrostu liczby zachorowań. To umożliwiło pierwsze rozluźnienie. W ciągu kilku następnych dni ocenimy, jak wpłynęło to na og&oacute;lną sytuację. Informacje na ten temat zostaną przedstawione publicznie dopiero w przyszłym tygodniu. Następnie pojawi się informacja o tym, jak należy postępować.<br />
<br />
- Odległość i prawidłowe noszenie masek pozostały decydujące. W tym systemie będą r&oacute;wnież przeprowadzane egzaminy.<br />
<span style="font-size: small;"><br />
Oczywiście będziemy Państwa informować na bieżąco, tak jak dotychczas, jeśli pojawią się dalsze istotne informacje.<br />
</span><br />
<span style="font-size: large;">Życzymy dużo zdrowia!</span><br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    '#WBSbleibtzuhause do 24.05',
    '',
    'https://wbs.pl/wbsbleibtzuhause_do_2405_-3637.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-69',
    'kreatywnie-przeciw-koronawirusowi-wirtualna-wycieczka-do-francji-3683',
    'Kreatywnie przeciw koronawirusowi. Wirtualna wycieczka do Francji',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14407/800x600_img_6225.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W te wakacje z powodu pandemii koronawirusa być moze będziemy musieli zrezygnować z podr&oacute;ży dookoła świata. Jednak uczniowie klasy 6A postanowili &quot;wirualnie odwiedzić&quot; Francję. Zobaczcie efekty tej podr&oacute;ży. <br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14408/img_6221.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14408/800x600_img_6221.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14409/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14409/800x600_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14410/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14410/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14411/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14411/800x600_3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14412/4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14412/800x600_4.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14413/5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14413/800x600_5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14414/6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14414/800x600_6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14415/img_6222a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14415/800x600_img_6222a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14416/img_6228.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14416/800x600_img_6228.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Kreatywnie przeciw koronawirusowi. Wirtualna wycieczka do Francji',
    '',
    'https://wbs.pl/kreatywnie_przeciw_koronawirusowi_wirtualna_wycieczka_do_francji-3683.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-70',
    'zakonczenie-miedzynarodowego-projektu-mauern-zum-sprechen-bringen-bygone-nearby-z-udzialem-uczennic-i-uczniow-wbs-3813',
    'Zakończenie międzynarodowego projektu „Mauern zum Sprechen bringen“ - „Bygone Nearby“ z udziałem uczennic i uczniów WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14957/800x600_www5.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Czego dotyczy projekt realizowany pod kierownictwem Instytutu Goethe w Kijowie?<br />
Jak m&oacute;wi sam organizator:  &bdquo;Bygone Nearby&rdquo; jest wsp&oacute;lnym projektem szk&oacute;ł z całej Polski, Niemiec i Ukrainy pod hasłem &bdquo;Wypędzenie&rdquo; <br />
<br />
W ramach projektu odwiedzono miejsca (patrz lista), kt&oacute;re w znacznym stopniu zostały zniszczone i zmienione na skutek drugiej wojny światowej i w kt&oacute;rych doszło do całkowitego wysiedlenia lokalnej społeczności. Przedstawione tu przymusowe migracje są tylko fragmentem przeszłości, ale wymiana między trzema krajami jest nadal aktualna a skutki daleko idące, choć często ukrywane. <br />
Fotografia jako język nie potrafi wyrazić okrucieństw wojny, ale pomaga nam poczuć i zrozumieć tamte czasy. <br />
<br />
Uczniowie zostali zaproszeni do zgłębiania historii swoich rodzinnych miejscowości, wykorzystując fotografię jako narzędzie do refleksji, zwłaszcza poprzez oglądanie budynk&oacute;w, kt&oacute;re były wielokrotnie przebudowywane w trakcie, przed i po wojnie, a tym samym służą jako wsp&oacute;łcześni świadkowie. Warsztaty, kt&oacute;re odbyły się latem 2020 roku, zostały opracowane na zlecenie Goethe-Institut Ukraina pod tw&oacute;rczym kierownictwem artysty i fotografa Jakoba Ganslmeiera i w towarzystwie międzynarodowego zespołu historyk&oacute;w, nauczycieli i ekspert&oacute;w.<br />
<br />
Ponieważ rok 2020 przyni&oacute;sł nieoczekiwane zmiany, stanęliśmy przed wyzwaniem przedstawienia przebiegu projektu w formie cyfrowej. &bdquo;Bygone Nearby&rdquo; stało się tym samym kompleksową platformą internetową, kt&oacute;ra nie tylko pokazuje ostateczne rezultaty, ale r&oacute;wnież umożliwia wgląd w procesy uczestnictwa w projekcie, kt&oacute;re doprowadziły do powstania zdjęć. Tam właśnie uczniowie mogą dzielić się swoimi poglądami i przemyśleniami.<br />
<br />
Nasza grupa, w skład kt&oacute;rej wchodziła Olga (12), Igora (11), Helena (10), Anastazja (10) i Mikołaj W. (10)  zajmowała się historią dzielnicy Muran&oacute;w. Przez dwa dni przygotowywała fotoreportaż na wystawę zdjęć do projektu. Poza nimi powstały r&oacute;wnież - bardzo wzruszające - teksty, w kt&oacute;rych uczniowie wyrazili swoje odczucia na temat straszliwej historii tego miejsca.<br />
<br />
W piątek, 27 listopada 2020 odbyło się online spotkanie zamykające projekt z udziałem wszystkich uczestnik&oacute;w szk&oacute;ł z Niemiec, Polski i Ukrainy. Olga reprezentowała WBS jako prelegent, zaś Mikołaj był gospodarzem prezentacji. <br />
<br />
Szkoda, że z powodu pandemii nie udało się osobiście spotkać w Kijowie.<br />
<br />
Norbert St&uuml;we<br />
<br />
<br />
YouTube-Link do projektu &bdquo;Mauern zum Sprechen bringen&ldquo; znajduje się <a href="https://youtu.be/bEd82jGbwrc"><span style="background-color: rgb(255, 255, 153);">tutaj</span></a><a href="https://www.youtube.com/watch?v=bEd82jGbwrc&amp;feature=youtu.be"><br />
</a><br />
<iframe src="https://www.youtube.com/embed/UWOTEqeMhWw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14958/img_6621.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14958/800x600_img_6621.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14959/img_6622.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14959/800x600_img_6622.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14960/img_6623.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14960/800x600_img_6623.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14961/img_6630.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14961/800x600_img_6630.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Zakończenie międzynarodowego projektu „Mauern zum Sprechen bringen“ - „Bygone Nearby“ z udziałem uczennic i uczniów WBS',
    '',
    'https://wbs.pl/zakonczenie_miedzynarodowego_projektu__mauern_zum_sprechen_bringen____bygone_nearby__z_udzialem_uczennic_i_uczniow_wbs-3813.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-71',
    'etap-regionalny-konkursu-jugend-musiziert-2026-5198',
    'Etap regionalny konkursu Jugend musiziert 2026',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/26000/800x600_3.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Etap regionalny konkursu Jugend musiziert 2026<br />
<br />
14go stycznia odbył się w naszej szkole etap regionalny prestiżowego niemieckiego konkursu muzycznego Jugend musiziert. Zaprezentowało się 21 uczestniczek i uczestnik&oacute;w w kategoriach: perkusja solo, fortepian solo, gitara elektryczna solo oraz zespoły akompaniujące w muzyce POP. Było wiele pierwszych i drugich nagr&oacute;d a 13 os&oacute;b uzyskało pierwszą nagrodę z awansem do kolejnego etapu konkursu w marcu w Genewie. Jury uczniowskie wręczyło uczestnikom 10 nagr&oacute;d specjalnych. Wszyscy uczestnicy otrzymali r&oacute;wnież słodki upominek. Wielkie gratulacje!<br />
<br />
Marcin Lemiszewski<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/26001/wbs-jumu26-2-2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26001/800x600_wbs-jumu26-2-2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26002/wbs-jumu26-2-3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26002/800x600_wbs-jumu26-2-3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26003/wbs-jumu26-2-4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26003/800x600_wbs-jumu26-2-4.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26004/wbs-jumu26-2-5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26004/800x600_wbs-jumu26-2-5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26005/wbs-jumu26-2-6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26005/800x600_wbs-jumu26-2-6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26006/wbs-jumu26-2-7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26006/800x600_wbs-jumu26-2-7.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26007/wbs-jumu26-2-8.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26007/800x600_wbs-jumu26-2-8.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26008/wbs-jumu26-2-9.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26008/800x600_wbs-jumu26-2-9.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26009/wbs-jumu26-2-10.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26009/800x600_wbs-jumu26-2-10.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26010/wbs-jumu26-2-11.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26010/800x600_wbs-jumu26-2-11.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26011/wbs-jumu26-2-12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26011/800x600_wbs-jumu26-2-12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26012/wbs-jumu26-2-13.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26012/800x600_wbs-jumu26-2-13.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26013/wbs-jumu26-2-14.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26013/800x600_wbs-jumu26-2-14.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26014/wbs-jumu26-2-15.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26014/800x600_wbs-jumu26-2-15.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26015/wbs-jumu26-2-16.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26015/800x600_wbs-jumu26-2-16.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26016/wbs-jumu26-2-17.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26016/800x600_wbs-jumu26-2-17.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26017/wbs-jumu26-2-19.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26017/800x600_wbs-jumu26-2-19.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26018/wbs-jumu26-2-21.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26018/800x600_wbs-jumu26-2-21.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26019/wbs-jumu26-2-23.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26019/800x600_wbs-jumu26-2-23.jpg);">
			</a>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Etap regionalny konkursu Jugend musiziert 2026',
    '',
    'https://wbs.pl/etap_regionalny_konkursu_jugend_musiziert_2026-5198.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-72',
    'mielismy-szczescie-konkurs-czytelniczy-odbyl-sie-ostatniego-dnia-przed-zamknieciem-szkol-3811',
    'Mieliśmy szczęście - Konkurs czytelniczy odbył się ostatniego dnia przed zamknięciem szkół',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14944/800x600_dsc03709.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W piątek 16 października 2020, a więc ostatniego dnia przed feriami jesiennymi i p&oacute;źniejszym zamknięciem szk&oacute;ł, odbył się finał tegorocznego konkursu czytelniczego.<br />
Aby zachować wszelkie środki bezpieczeństwa konkurs odbył się nie jak co roku w bibliotece, lecz w auli, a wzięła w nim udział cała klasa 6A.<br />
Dla wszystkich udział w konkursie jest czymś szczeg&oacute;lnym. Na początku każdy z uczestnik&oacute;w czyta kr&oacute;tki fragment z samodzielnie wybranej książki, a następnie 3 minuty nieznanego tekstu. Tym razem były to fragmenty z książki Michaela Ende &bdquo;Niekończąca się historia&rdquo;. <br />
Wszyscy świetnie się bawili, chociaż konkurs wcale nie był prosty. Uczestnicy włożyli wiele wysiłku w to, aby dobrze zaprezentować się przed jury.<br />
Decyzja, jaką musieli podjąć członkowie jury także nie była łatwa. Ostatecznie zwycięzcą konkursu został Mateusz Jagodziński. <br />
W tym roku w skład jury wchodziły: pani Joanna Koszykowska - bibliotekarka, pani Petra St&uuml;we &ndash; nauczycielka języka niemieckiego, pani Eva Klo&szlig; &ndash; praktykantka oraz laureatka drugiego miejsca z zeszłego roku Nele Koppel.<br />
Kolejny etap konkursu ma odbyć się w styczniu 2021 w Niemczech, gdzie Mateusz będzie reprezentował WBS.<br />
Nasi  uczniowie z niecierpliwością oczekują konkursu czytelniczego w przyszłym roku szkolnym!<br />
<br />
Hania Kulik i Petra St&uuml;we<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14945/dsc03704.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14945/800x600_dsc03704.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14946/dsc03711.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14946/800x600_dsc03711.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14947/dsc03712.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14947/800x600_dsc03712.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14948/dsc03713.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14948/800x600_dsc03713.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14949/dsc03717.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14949/800x600_dsc03717.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14950/dsc03719.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14950/800x600_dsc03719.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14951/dsc03720.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14951/800x600_dsc03720.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Mieliśmy szczęście - Konkurs czytelniczy odbył się ostatniego dnia przed zamknięciem szkół',
    '',
    'https://wbs.pl/mielismy_szczescie__konkurs_czytelniczy_odbyl_sie_ostatniego_dnia_przed_zamknieciem_szkol-3811.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-73',
    'przedswiateczna-akcja-dobroczynna-3847',
    'Przedświąteczna akcja dobroczynna',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15191/800x600_www3.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Klasy 6a i 6c zorganizowały w tym roku przedświąteczną akcję dobroczynną dla dzieci z Plac&oacute;wki Socjalizacyjnej &quot;Panda&quot; w Kozienicach. Pięknie zapakowane prezenty już wkr&oacute;tce dotrą w ręce dzieci.<br />
Serdecznie dziękujemy <img src="https://wbs.pl/cms/class/extends/fckeditor/editor/images/smiley/msn/heart.gif" alt="" /><br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15192/6a_i_6c_-_akcja_dobroczynna2a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15192/800x600_6a_i_6c_-_akcja_dobroczynna2a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15193/6a_i_6c_-_akcja_dobroczynna6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15193/800x600_6a_i_6c_-_akcja_dobroczynna6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15194/6a_i_6c_-_akcja_dobroczynna8a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15194/800x600_6a_i_6c_-_akcja_dobroczynna8a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15195/6a_i_6c_-_akcja_dobroczynna10a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15195/800x600_6a_i_6c_-_akcja_dobroczynna10a.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Przedświąteczna akcja dobroczynna',
    '',
    'https://wbs.pl/przedswiateczna_akcja_dobroczynna_-3847.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-74',
    'ankieta-dotyczaca-nauki-zdalnej-3584',
    'Ankieta dotycząca nauki zdalnej',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14095/800x600_feedback-3676922_640.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice,<br />
<br />
od prawie trzech tygodni wsp&oacute;lnie pokonujemy trudy nauki zdalnej, a od dw&oacute;ch tygodni mamy do dyspozycji platformę G Suite.<br />
<br />
W celu udoskonalenia naszej oferty prosimy Państwa o wzięcie udziału w ankiecie online za pomocą systemu IQES. W ciągu dzisiejszego dnia otrzymają Państwo zaproszenie do wypełnienia ankiety, kt&oacute;rą prosimy odesłać do poniedziałku 6.04.2020.<br />
<br />
Prosimy o wyrozumiałość, iż możemy wysłać tylko jedno zaproszenie na ucznia. Uprzejmie prosimy o sprawdzenie skrzynek wszystkich podanych nam adres&oacute;w mailowych. Z uwagi na brak możliwości weryfikacji powt&oacute;rne wysyłanie zaproszeń nie jest możliwe. Jednocześnie zapewniona jest pełna anonimowość. Państwa udział w ankiecie jest bardzo ważny, gdyż tylko dzięki Państwa uwagom możliwe jest wprowadzenie zmian z korzyścią dla naszych uczni&oacute;w.<br />
<br />
Z niecierpliwością oczekujemy Państwa opinii i z g&oacute;ry dziękujemy za wzięcie udziału w ankiecie.<br />
<br />
Pozdrawiam serdecznie życząc zdrowia<br />
<br />
<br />
dr Christine Biermann<br />
Koordynator do spraw jakości nauczania w WBS<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Ankieta dotycząca nauki zdalnej',
    '',
    'https://wbs.pl/ankieta_dotyczaca_nauki_zdalnej-3584.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-75',
    'adwent-w-bibliotece-3495',
    'Adwent w bibliotece',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13720/800x600_a13.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Podczas całego adwentu w naszej Bibliotece nauczyciele czytają uczennicom i uczniom teksty o tematyce świątecznej.<br />
W tym roku pragniemy przybliżyć literaturę związaną ze Świętami Bożego Narodzenia w języku polskim, niemieckim, francuskim, po saarlandzku oraz w języku migowym.<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13721/a14.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13721/800x600_a14.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13722/a1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13722/800x600_a1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13723/a7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13723/800x600_a7.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13724/a10.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13724/800x600_a10.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13725/a16.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13725/800x600_a16.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13726/a18.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13726/800x600_a18.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13727/a21.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13727/800x600_a21.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13728/a19.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13728/800x600_a19.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Adwent w bibliotece',
    '',
    'https://wbs.pl/adwent_w_bibliotece-3495.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-76',
    'nasi-uczniowie-jurorami-w-miedzynarodowym-festiwalu-filmowym-w-chemniz-3372',
    'Nasi uczniowie jurorami w Międzynarodowym Festiwalu Filmowym w Chemniz',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13093/800x600_img-20191010-wa0003.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Nasi uczniowie - Nele i Artur zostali zaproszeni na Międzynarodowy Festiwal Filmowy w Chemniz jako jurorzy. W skład jury wchodzą dzieci z Pragi, Moskwy, Sztokholmu, Francji, Austrii, Lublany, Bawarii i Budapesztu.<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13094/img-20191010-wa0001.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13094/800x600_img-20191010-wa0001.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13095/img-20191010-wa0002.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13095/800x600_img-20191010-wa0002.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13096/img-20191009-wa0001.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13096/800x600_img-20191009-wa0001.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nasi uczniowie jurorami w Międzynarodowym Festiwalu Filmowym w Chemniz',
    '',
    'https://wbs.pl/nasi_uczniowie_jurorami_w_miedzynarodowym_festiwalu_filmowym_w_chemniz-3372.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-77',
    'zwyciestwo-w-mistrzostwach-wilanowa-w-badmintonie-liceum-5188',
    'Zwycięstwo w Mistrzostwach Wilanowa w badmintonie - liceum',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/25913/800x600_1.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Uczniowie naszego liceum &ndash; Julek, Matthias i David &ndash; zwyciężyli w Mistrzostwach Wilanowa w badmintonie. Chłopcy zaprezentowali świetną formę, determinację oraz wysoki poziom sportowy, sięgając po pierwsze miejsce w rywalizacji.<br />
<br />
Gratulujemy i życzymy dalszych sukces&oacute;w sportowych!
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/25914/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25914/800x600_1.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Zwycięstwo w Mistrzostwach Wilanowa w badmintonie - liceum',
    '',
    'https://wbs.pl/zwyciestwo_w_mistrzostwach_wilanowa_w_badmintonie__liceum-5188.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-78',
    'nowa-czesc-rekreacyjna-dla-uczniow-wbs-3746',
    'Nowa część rekreacyjna dla uczniów WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14765/800x600_img_20200922_094252.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Po długo oczekiwanym powrocie do szkoły starsi uczniowie korzystają nie tylko z ładnej pogody, ale r&oacute;wnież z nowej części rekreacyjnej. Znajdują się tam: zewnętrzny st&oacute;ł do tenisa stołowego, miejsce do gry w szachy oraz zestaw do street workoutu, kt&oacute;rego podłoże stanowią ekologiczne zrębki gwarantujące najwyższe standardy bezpieczeństwa. <br />
<br />
Serdecznie dziękujemy wszystkim uczestniczącym w projekcie &ndash; Uczniom i Uczennicom, Nauczycielom i Pracownikom oraz Rodzicom. <br />
W szczeg&oacute;lności dziękujemy Radzie Rodzic&oacute;w - Pani Eli Sztemberg i Pani Magdzie Szymaniak za zaangażowanie, pomysły i poświęcony czas oraz za sfinansowanie przez Radę Rodzic&oacute;w stołu do tenisa oraz figur szachowych!<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14766/img_20200921_135155.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14766/800x600_img_20200921_135155.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14767/img_20200921_135222.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14767/800x600_img_20200921_135222.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14768/img_20200923_095053.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14768/800x600_img_20200923_095053.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nowa część rekreacyjna dla uczniów WBS',
    '',
    'https://wbs.pl/nowa_czesc_rekreacyjna_dla_uczniow_wbs-3746.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-79',
    'kronika-szkolna-jahrbuch-2020-21-4018',
    'Kronika szkolna - Jahrbuch 2020_21',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/16039/800x600_21-07_zakonczenie-2000.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Tradycją naszej szkoły jest kronika szkolna, kt&oacute;rą na koniec roku szkolnego otrzymują wszyscy uczniowie  i nauczyciele. Z okazji 50 rocznicy słynnego gestu Willy''ego Brandta pod pomnikiem Bohater&oacute;w Getta w Warszawie oraz powstania logo Campusu im. Willy''ego Brandta motywem przewodnim tegorocznego &quot;Jahrbucha&quot; stał się nasz patron. <br />
Pomimo kilku miesięcy zdalnego nauczania przeżyliśmy wiele pięknych chwil, co dokumentują barwne zdjęcia. <br />
Mamy nadzieję, że oglądanie ich sprawi Państwu dużo radości. <br />
<br />
Zdjęcia: Marek Kępiński<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/16040/21-07_zakonczenie-2008.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16040/800x600_21-07_zakonczenie-2008.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16041/21-07_zakonczenie-2016.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16041/800x600_21-07_zakonczenie-2016.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16042/21-07_zakonczenie-2022.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16042/800x600_21-07_zakonczenie-2022.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16043/wbs-zakonczenie-58-419.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16043/800x600_wbs-zakonczenie-58-419.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16044/wbs-zakonczenie-63-978.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16044/800x600_wbs-zakonczenie-63-978.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16045/wbs-zakonczenie-64-462.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16045/800x600_wbs-zakonczenie-64-462.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16046/wbs-zakonczenie-66-1014.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16046/800x600_wbs-zakonczenie-66-1014.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Kronika szkolna - Jahrbuch 2020_21',
    '',
    'https://wbs.pl/kronika_szkolna__jahrbuch_2020_21-4018.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-80',
    'swiatowy-dzien-ksiazki-i-praw-autorskich-3628',
    'Światowy Dzień Książki i Praw Autorskich',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14213/800x600_www1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<strong>23 kwietnia</strong> obchodzony jest <strong>Światowy Dzień Książki i Praw Autorskich.</strong><br />
<br />
Od kilku lat w naszej szkole tego dnia o godz. 10.00 wszyscy uczniowie i uczennice, nauczyciele i nauczycielki oraz wszyscy pozostali pracownicy szkoły odkładają na 20 minut swoje zajęcia, aby w tym czasie delektować się czytaniem.<br />
<br />
W tym roku jednak w takiej formie nie możemy obchodzić Dnia Książki.<br />
<span style="color: rgb(255, 0, 0);"><br />
<strong><u>ALE</u></strong><u>:</u></span><u> wszyscy zrobimy to w naszych domach, wsp&oacute;lnie z rodzicami, rodzeństwem i wszystkimi wsp&oacute;łmieszkańcami.</u><br />
<br />
<span style="background-color: rgb(255, 255, 153);">Zr&oacute;bcie zdjęcia w jaki spos&oacute;b obchodziliście Dzień Książki i prześlijcie je na m&oacute;j adres: </span><strong><span style="background-color: rgb(255, 255, 153);">biblioteka@wbs.pl</span></strong><br />
<br />
Życzę wszystkim wiele radości z czytania i kreatywności przy robieniu zdjęć.<br />
<br />
<br />
Joanna Koszykowska<br />
<span style="background-color: rgb(255, 255, 153);"><br />
</span><strong><span style="background-color: rgb(255, 255, 153);">23.04 &ndash; czwartek &ndash; 10.00 !!!<br />
<br />
</span></strong><br />
Zgoda na publikację i wykorzystanie fotografii:<br />
Osoba wysyłająca zdjęcia wyraża zgodę na wykorzystanie ich przez Polsko-Niemiecką Szkołę Spotkań i Dialogu im. Willy''ego Brandta w Warszawie, na opublikowanie ich na stronie gł&oacute;wnej (www.wbs.pl), w Jahrbuchu oraz na kanałach medi&oacute;w społecznościowych (Facebook, Instagram). <br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Światowy Dzień Książki i Praw Autorskich',
    '',
    'https://wbs.pl/swiatowy_dzien_ksiazki_i_praw_autorskich-3628.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-81',
    '30-lat-po-zjednoczeniu-niemiec-wizyta-ambasadora-niemiec-w-wbs-3777',
    '30 lat po zjednoczeniu Niemiec. Wizyta Ambasadora Niemiec w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14838/800x600_20-10-botschafter-66.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W dniu 15 października 2020 naszą szkołę odwiedził wyjątkowy gość - nowy Ambasador Niemiec w Warszawie, dr Arndt Freytag von Loringhoven.<br />
<br />
Przez ponad godzinę rozmawiał z uczniami klas 10, 11 i 12 o wydarzeniach z lat 1989/90 i stosunkach polsko-niemieckich.<br />
<br />
Spotkanie poprowadzili uczniowie naszej szkoły:&nbsp; Olga (12. klasa) i Igor (11. klasa). Podczas panelu dyskusyjnego wielokrotnie zwracano uwagę na aktualną sytuację po zjdenoczeniu Niemiec, a także na szanse i wyzwania dla relacji polsko-niemieckich.<br />
<br />
Liczne wypowiedzi i pytania ze strony uczni&oacute;w wyraźnie pokazały duże zainteresowanie tą tematyką wśr&oacute;d naszej szkolnej młodzieży. <br />
<br />
Tematy, kt&oacute;re pojawiły się podczas tego spotkania z pewnością będziemy kontynuować na lecjach historii.&nbsp;<br />
<br />
N.St&uuml;we<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14839/20-10-botschafter-17.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14839/800x600_20-10-botschafter-17.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14840/20-10-botschafter-20.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14840/800x600_20-10-botschafter-20.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14841/20-10-botschafter-29.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14841/800x600_20-10-botschafter-29.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14842/20-10-botschafter-44.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14842/800x600_20-10-botschafter-44.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14843/20-10-botschafter-56.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14843/800x600_20-10-botschafter-56.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14844/20-10-botschafter-64.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14844/800x600_20-10-botschafter-64.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14845/20-10-botschafter-107.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14845/800x600_20-10-botschafter-107.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14846/20-10-botschafter-148.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14846/800x600_20-10-botschafter-148.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    '30 lat po zjednoczeniu Niemiec. Wizyta Ambasadora Niemiec w WBS',
    '',
    'https://wbs.pl/30_lat_po_zjednoczeniu_niemiec_wizyta_ambasadora_niemiec_w_wbs-3777.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-82',
    'serdeczne-zyczenia-dla-ojcow-3685',
    'Serdeczne życzenia dla Ojców!',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14427/800x600_www1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Naszym ojcom i tatusiom życzymy dziś wszystkiego najlepszego oraz niezapomnianych chwil ze swymi pociechami. Zobaczcie, jak bardzo ważni jesteście dla swoich dzieci:)<br />
<br />
<iframe src="https://www.youtube.com/embed/8BTn6e4SKDk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Serdeczne życzenia dla Ojców!',
    '',
    'https://wbs.pl/serdeczne_zyczenia_dla_ojcow-3685.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-83',
    'pozegnanie-maturzystow-i-absolwentow-realschule-3687',
    'Pożegnanie maturzystów i absolwentów Realschule',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14429/800x600_wbs-abi-20-1630.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Liebe Letitia, lieber Konrad, liebe Abiturienten, <br />
<br />
knapp zwei Jahre ist es her, dass ihr zwei in die 9. Klasse gekommen seid. Vieles hier war anders als ihr es kanntet, vieles war neu. Die Menschen sowieso, aber auch die F&auml;cher, die Arbeitsweisen, die Anforderungen. Ihr habt die Herausforderungen, die sich euch gestellt haben, angenommen - und uns Herausforderungen zur&uuml;ckgegeben. In den letzten zwei Jahren haben wir viel miteinander gearbeitet und gelernt, wir haben Spa&szlig; gehabt und ernsthafte Unterhaltungen. Wir haben festgestellt, dass ich gern Letitias Zeichenf&auml;higkeiten h&auml;tte und Konrads Sportlichkeit (auch wenn die zwischendurch mal eingeschr&auml;nkt war). Ihr habt hier Freunde gefunden und ward f&uuml;r die Klasse ein gro&szlig;er Gewinn. Ihr werdet uns furchtbar fehlen im n&auml;chsten Schuljahr.  <br />
Euer Weg wird weitergehen - in eine andere Richtung. Wir w&uuml;nschen euch von Herzen, dass ihr die Dinge, die ihr hier gelernt habt mitnehmt - und euch manchmal an uns erinnert. Und damit meine ich nicht die fachlichen Dinge, die ihr gelernt habt. Sondern vor allem die menschlichen.  <br />
Ihr habt bewiesen, dass ihr in der Lage seid, auch in schwierigen und ungewohnten Situationen einen k&uuml;hlen Kopf zu bewahren und euch auf euch selbst zu verlassen - sowohl bei den schriftlichen als auch bei den m&uuml;ndlichen Pr&uuml;fungen. Nehmt diese F&auml;higkeit mit, man braucht sie oft genug im Leben.  <br />
Ihr habt bewiesen, dass ihr zuverl&auml;ssig und selbstst&auml;ndig an euch gestellte Aufgaben erledigen k&ouml;nnt in der letzten Phase eures Schullebens - auch das sind F&auml;higkeiten, die (&uuml;ber) lebenswichtig sind.  <br />
Ihr habt beide in unterschiedlichen pers&ouml;nlichen Situationen bewiesen, dass ihr auch zuverl&auml;ssig seid, wenn es euch mal nicht so gut geht.  <br />
Ihr habt beide bewiesen, dass ihr junge Erwachsene seid, die ihre Ziele im Leben mit Ausdauer erreichen k&ouml;nnen.  <br />
<br />
Ich gratuliere euch als Klassenlehrerin aber auch im Namen des Kollegiums ganz herzlich zum erreichten Schulabschluss. F&uuml;r eure Zukunft w&uuml;nsche ich und w&uuml;nschen wir euch alles alles Gute. Steckt niemals den Kopf in den Sand, sondern seht zu, dass ihr es immer wieder schafft, euer Ziel im Blick zu behalten. Und wenn ihr mal Hilfe braucht - dann meldet euch. Ihr habt hier so viele Menschen kennengelernt - und alle sind sicher bereit, euch zu unterst&uuml;tzen.   <br />
<br />
Herzlichen Gl&uuml;ckwunsch zum Schulabschluss - und lasst mal von euch h&ouml;ren! <br />
<br />
Christine Biermann<br />
<br />
.............................................<br />
<br />
Liebe Absolventinnen, liebe Absolventen,<br />
<br />
der Abi-Jahrgang 2020 war durch besondere Umst&auml;nde gepr&auml;gt. Dass Ihr es gepackt habt, dass Ihr es trotz allem mit Erfolg gepackt habt, das verdient Respekt und gro&szlig;e Anerkennung.<br />
Es mag ein wenig paradox klingen, ich glaube aber, dass die Erfahrung der letzten Wochen f&uuml;r Euren weiteren Weg auch wertvoll sein wird. Wie ich darauf komme? Nun, im Unterschied zu &bdquo;regul&auml;ren&ldquo; Jahrg&auml;ngen musstet Ihr zwei Komponenten zusammenbringen. Da ist das konzentrierte, planvolle und zielstrebige Lernen, wie f&uuml;r Generationen von Abiturienten vor und nach Euch auch. Und dann war da die Herausforderung, sich in ganz kurzer Zeit und ohne vorherige Generalprobe ausgerechnet in der hei&szlig;en Phase mit Umst&auml;nden zu arrangieren, die zus&auml;tzliche Kraft kosten und sehr viel Elastizit&auml;t und Durchhalteverm&ouml;gen verlangten. Am Ende steht ein Klassennotendurchschnitt von 1,6 - unter diesen Umst&auml;nden nahezu unglaublich. Ihr habt meine Bewunderung daf&uuml;r.<br />
Diese Kombination aus planvollen und zielstrebigen Schritten einerseits und das Meistern unerwarteter Umst&auml;nde andererseits steht sinnbildlich auch f&uuml;r das Leben insgesamt. Behaltet Eure Ziele und Tr&auml;ume im Blick, bleibt dabei aber auch flexibel, dann wird Euch der Erfolg treu bleiben. <br />
Wenn wir schon von Eurem Erfolg sprechen, muss man allerdings auch jene erw&auml;hnen, die dazu beigetragen, vielleicht auch das Fundament dazu gelegt haben. Das sind Eure Eltern, Eure Familien und nat&uuml;rlich auch alle Eure Lehrer. M&ouml;ge diese Art der Unterst&uuml;tzung Euch auf den weiteren Abschnitten zuteilwerden. Und vers&auml;umt bitte auch Eurerseits keine Gelegenheit, f&uuml;r Menschen um Euch herum da zu sein. <br />
Uns allen ist bewusst, dass wir von nun an ganz unterschiedliche Wege gehen werden. Nutzt die M&ouml;glichkeiten, die das Leben f&uuml;r Euch bereith&auml;lt! Ihr habt die Freiheit, Euren Lebensweg zu w&auml;hlen und ihn so zu gestalten, wie Ihr das f&uuml;r richtig haltet. ',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Pożegnanie maturzystów i absolwentów Realschule',
    '',
    'https://wbs.pl/pozegnanie_maturzystow_i_absolwentow_realschule_-3687.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-84',
    'wytyczne-dotyczace-nauczanie-stacjonarnego-i-zdalnego-w-wbs-3784',
    'Wytyczne dotyczące nauczanie stacjonarnego i zdalnego w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14855/800x600_img_20200520_173103_neu.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Wytyczne stan na 30.10.2020
				</td>
				<td>
					<a href="pub/cms/files/1399/wytyczne_dotyczace_nauczania_stacjonarnego_i_zdalnego_w_wbs_30.10.2020.pdf" title="Wytyczne stan na 30.10.2020" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wytyczne dotyczące nauczanie stacjonarnego i zdalnego w WBS',
    '',
    'https://wbs.pl/wytyczne_dotyczace_nauczanie_stacjonarnego_i_zdalnego_w_wbs-3784.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-85',
    'konsultacje-dla-rodzicow-3715',
    'Konsultacje dla rodziców',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14662/800x600_elternberatung1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Rodzice,<br />
<br />
jeśli potrzebujecie Państwo wsparcia, pomocy lub porady w sprawach dotyczących Państwa dziecka, oferujemy spotkania&nbsp; z naszym zespołem doradc&oacute;w psychologicznych (Pani Kondracka, Pani Sarnecka i Pan Pommerening).<br />
<br />
Pani Kondracka oferuje porady psychologiczne rodzicom i dzieciom, kt&oacute;rzy ich potrzebują.<br />
<br />
W celu um&oacute;wienia się na spotkanie zapraszamy do kontaktu:<br />
<br />
j.kondracka@wbs.pl<br />
j.sarnecka@wbs.pl<br />
a.pommerening@wbs.pl<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Konsultacje dla rodziców',
    '',
    'https://wbs.pl/konsultacje_dla_rodzicow-3715.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-86',
    'maski-ochronne-dla-medykow-zbiorka-organizowana-przez-naszego-ucznia-3631',
    'Maski ochronne dla medyków - zbiórka organizowana przez naszego ucznia',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14219/800x600_www2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Rodzice,<br />
<br />
w załączniku udostępniamy informację o zbi&oacute;rce pieniędzy na zakup masek dla medyk&oacute;w, zainicjowanej przez ucznia naszej szkoły Mikołaja Szuberta.<br />
<br />
<strong>Razem możemy wszystko !!  </strong><br />
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					List od Mikołaja
				</td>
				<td>
					<a href="pub/cms/files/1313/zbiorka_pl.pdf" title="List od Mikołaja" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Maski ochronne dla medyków - zbiórka organizowana przez naszego ucznia',
    '',
    'https://wbs.pl/maski_ochronne_dla_medykow__zbiorka_organizowana_przez_naszego_ucznia-3631.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-87',
    'wizyta-dr-stephana-holthoffpf-rtnera-2859',
    'Wizyta dr Stephana Holthoff-Pförtnera',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/10104/800x600_dr.holthoff-pförtner_in_der_wbs-142.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				10 października 2018 mieliśmy zaszczyt gościć w naszej szkole  ministra spraw europejskich Landu P&oacute;łnocna Nadrenia Westfalia <strong>dr Stephana Holthoff-Pf&ouml;rtnera </strong>wraz z prof. Ritą S&uuml;ssmuth. <br />
Z okazji Dnia Jedności Niemiec 03.10. odbył się z ich udziałem panel dyskusyjny na temat &bdquo;Jedność Niemiec, Europa a kwestia migracji&rdquo;. Udział w dyskusji  wzięli Imanuel Leiserowitz i Sonia Guillemot- uczniowie klasy 12, jak r&oacute;wnież dyrektor szkoły Mechthild Hinsberger-Boguski oraz nauczyciel historii Norbert St&uuml;we. W debacie uczestniczyli także uczniowie klas 9-12, dla kt&oacute;rych spotkanie z ministrem spraw europejskich było niepowtarzalną okazją do podjęcia osobistych rozm&oacute;w o aktualnych kwestiach politycznych. <br />
<br />
Zdjęcia: Marek Kępiński<br />
<br />
			</p>

		</div>
			

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/10105/dr.holthoff-pförtner_in_der_wbs-17.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10105/800x600_dr.holthoff-pförtner_in_der_wbs-17.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10106/dr.holthoff-pförtner_in_der_wbs-20.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10106/800x600_dr.holthoff-pförtner_in_der_wbs-20.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10107/dr.holthoff-pförtner_in_der_wbs-97.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10107/800x600_dr.holthoff-pförtner_in_der_wbs-97.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10108/dr.holthoff-pförtner_in_der_wbs-104.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10108/800x600_dr.holthoff-pförtner_in_der_wbs-104.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10109/dr.holthoff-pförtner_in_der_wbs-109.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10109/800x600_dr.holthoff-pförtner_in_der_wbs-109.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10110/dr.holthoff-pförtner_in_der_wbs-189.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10110/800x600_dr.holthoff-pförtner_in_der_wbs-189.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10111/dr.holthoff-pförtner_in_der_wbs-200.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10111/800x600_dr.holthoff-pförtner_in_der_wbs-200.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10112/dr.holthoff-pförtner_in_der_wbs-215.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10112/800x600_dr.holthoff-pförtner_in_der_wbs-215.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10113/dr.holthoff-pförtner_in_der_wbs-217.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10113/800x600_dr.holthoff-pförtner_in_der_wbs-217.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10114/dr.holthoff-pförtner_in_der_wbs-176.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10114/800x600_dr.holthoff-pförtner_in_der_wbs-176.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10115/dr.holthoff-pförtner_in_der_wbs-204.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10115/800x600_dr.holthoff-pförtner_in_der_wbs-204.jpg);">
			</a>
		</div>
		
	
</div>

		<a href="archiwum-1589.html" title="Archiwum" class="btn btn-default">Powrót do listy</a>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wizyta dr Stephana Holthoff-Pförtnera',
    '',
    'https://wbs.pl/wizyta_dr_stephana_holthoffpf_rtnera_-2859.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-88',
    'wymiana-uczniowska-soest-3491',
    'Wymiana uczniowska Soest',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13615/800x600_img-20191204-wa0007.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Nadszedł czas: klasa 7c WBS rozpoczyna wymianę student&oacute;w w celu doskonalenia swych umiejętności językowych.<br />
Przez dziesięć dni 16 dzieci będzie mieszkać z niemieckimi rodzinami goszczącymi. Rano będą brali udział wzajęciach w Archigymnasium w Soest (NRW) z nauczycielkami (panią Bagdasarian i panią Glinką), a po południu uczestniczyć w wycieczkach.<br />
<br />
Na zdjęciach:<br />
WBS w Archigymnasium, naszej szkole partnerskiej.<br />
Kiosk. Szczeg&oacute;lnie ważne miejsce w Archigymnasium.<br />
Gry integrujące.<br />
Soest znajduje się na Jakobsweg.<br />
Wizyta w kopalni Zollverein (Essen).<br />
Budujemy cząsteczki soli w solnych&nbsp; kopalniach Bad Sassendorf.<br />
Na księżycu w Heinz Nixdorf Museum w Paderborn<br />
Heinz-Nixdorf-Forum Paderborn<br />
Bliżej natury w Arnsberger Wald<br />
<br />
<br />
<img src="/pub/uploader/images/1368520705_logo_pnwm_dopisek_poziom_cmyk.jpg" alt="1368520705_logo_pnwm_dopisek_poziom_cmyk.jpg" width="616" height="137" /><br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13616/img_20191205_091348_resized_20191209_082336587.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13616/800x600_img_20191205_091348_resized_20191209_082336587.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13617/img_20191205_130054_resized_20191209_082634903.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13617/800x600_img_20191205_130054_resized_20191209_082634903.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13618/img_20191205_140206_resized_20191209_082747126.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13618/800x600_img_20191205_140206_resized_20191209_082747126.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13619/img_20191205_140324_resized_20191209_082747606.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13619/800x600_img_20191205_140324_resized_20191209_082747606.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13620/img_20191205_191008_resized_20191209_082844779.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13620/800x600_img_20191205_191008_resized_20191209_082844779.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13621/img_20191209_115429_resized_20191209_083137095.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13621/800x600_img_20191209_115429_resized_20191209_083137095.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13622/img_20191210_103231_resized_20191210_103456494.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13622/800x600_img_20191210_103231_resized_20191210_103456494.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13623/img_20191212_113341_resized_20191212_121319705.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13623/800x600_img_20191212_113341_resized_20191212_121319705.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13624/img-20191204-wa0007.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13624/800x600_img-20191204-wa0007.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13625/img_20191210_150650_1_resized_20191212_121631641.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13625/800x600_img_20191210_150650_1_resized_20191212_121631641.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13626/img_20191210_144429_resized_20191212_121632299.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13626/800x600_img_20191210_144429_resized_20191212_121632299.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wymiana uczniowska Soest',
    '',
    'https://wbs.pl/wymiana_uczniowska_soest-3491.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-89',
    'koronawirus-wydluzenie-czasu-zamkniecia-placowek-oswiatowych-3575',
    'Koronawirus. Wydłużenie czasu zamknięcia placówek oświatowych',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14077/800x600_18.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Ministerstwo Edukacji Narodowej wydłużyło termin  zamknięcia  plac&oacute;wek oświatowych do <strong>10.04.20.</strong> Obowiązuje to r&oacute;wnież naszą szkołę. <strong>Od 4.04.20 do 17.04.20 trwają w Campusie im. Willy&rsquo;ego Brandta ferie wielkanocne</strong>. Wierzymy, że  spotkamy się po nich, tj. <strong>20.04.20</strong> zdrowi i w dobrej formie.<br />
<br />
Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy&rsquo;ego Brandta w Warszawie i przedszkole niemieckie Deutscher Kindergarten pozostaną zamknięte, ale lekcje i opieka pedagogiczna będą kontynuowane online. Za pomocą r&oacute;żnych metod staramy się znaleźć rozwiązania dla nowych wyzwań.<br />
<br />
Więcej informacji na temat kształcenia na odległość można znaleźć na stronie: <a href="https://www.gov.pl/">https://www.gov.pl.</a><br />
<br />
<br />
Życzymy Państwu dużo zdrowia! Chociaż już teraz można poczuć wiosnę w powietrzu, zostańmy w domu! <br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Koronawirus. Wydłużenie czasu zamknięcia placówek oświatowych',
    '',
    'https://wbs.pl/koronawirus_wydluzenie_czasu_zamkniecia_placowek_oswiatowych-3575.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-90',
    'odwolanie-lekcji-3566',
    'Odwołanie lekcji',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14068/800x600_wichtig.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Rodzice,<br />
<br />
w związku z dzisiejszym rozporządzeniem premiera M. Morawieckiego w dniach 12.03-25.03.20 zawieszone zostają zajęcia w szkołach. Jutrzejszy dzień oraz piątek służyć mają rodzicom uczni&oacute;w klas 1-8 do zorganizowania opieki dzieciom na kolejne dni. Szkoła postąpi zgodnie z wytycznymi i może zapewnić opiekę dzieciom klas 1-8 w wyjątkowej sytuacji zar&oacute;wno w czwartek jak i w piątek. Prosimy jednak poinformować nas o tym za pośrednictem sekretariatu szkoły dzisiaj do godz. 16.00 (sekretariat1@wbs.pl lub sekretariat2@wbs.pl ) lub (226422705). Nauczyciele będą kontaktować się (przesyłać zadania) rodzicom uczni&oacute;w klas 1-8 i bezpośrednio uczniom klas 9-12. Wykonane zadania uczniowie odsyłają nauczycielom przedmiotowym drogą mailową.<br />
<br />
<strong>Od 12.03 do 25.03 zamknięte będą r&oacute;wnież przedszkole Deutscher Kindergarten, Akademia Piłkarska WBS oraz Akademia Muzyczna WBS.</strong> <br />
<br />
Kolejne informacje będziemy przesyłać Państwu na bieżąco.<br />
<br />
Dziękujemy za wsp&oacute;łpracę.<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Odwołanie lekcji',
    '',
    'https://wbs.pl/odwolanie_lekcji-3566.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-91',
    'nauczanie-zdalne-od-120421-3947',
    'Nauczanie zdalne od 12.04.21',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15602/800x600_wbs_online.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice,<br />
<br />
w związku z przedłużeniem obowiązujących na terenie Polski obostrzeń do 18 kwietnia, od poniedziałku <strong>12.04.21 </strong> wszystkie klasy 1-12 powracają do nauczania zdalnego w dotychczasowej formie. <br />
<br />
<br />
Z poważaniem<br />
<br />
Mechthild Hinsberger-Boguski<br />
Dyrektor Szkoły<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nauczanie zdalne od 12.04.21',
    '',
    'https://wbs.pl/nauczanie_zdalne_od_120421-3947.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-92',
    '50-rocznica-uklekniecia-willyego-brandta-przed-pomnikiem-bohaterow-getta-artystyczne-portrety-naszego-patrona-3819',
    '50. rocznica uklęknięcia Willy''ego Brandta przed pomnikiem Bohaterów Getta. Artystyczne portrety naszego patrona.',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14980/800x600_www2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<u><em>Źr&oacute;dło:</em></u><br />
<em>Zdjęcie nr 1: Letitia Graczyk (autorka)<br />
Zdjęcia 2-6: Willy Brandt &quot;100-lecie urodzin&quot;, pod redakcją Jacka Jarczewskiego i Krzysztofa Ruchniewicza</em><br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14977/clipboard01.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14977/800x600_clipboard01.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14978/clipboard02.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14978/800x600_clipboard02.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14981/clipboard03.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14981/800x600_clipboard03.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14982/clipboard04.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14982/800x600_clipboard04.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14983/clipboard05.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14983/800x600_clipboard05.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14984/clipboard06.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14984/800x600_clipboard06.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    '50. rocznica uklęknięcia Willy''ego Brandta przed pomnikiem Bohaterów Getta. Artystyczne portrety naszego patrona.',
    '',
    'https://wbs.pl/50_rocznica_uklekniecia_willyego_brandta_przed_pomnikiem_bohaterow_getta_artystyczne_portrety_naszego_patrona-3819.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-93',
    'jaselka-5190',
    'Jasełka',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/25917/800x600_wbs-jaselka25-10-02922.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				&nbsp;Klasa 2a &amp; 3a&nbsp;
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/25918/wbs-jaselka25-2-02793.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25918/800x600_wbs-jaselka25-2-02793.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25919/wbs-jaselka25-3-02896.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25919/800x600_wbs-jaselka25-3-02896.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25920/wbs-jaselka25-8-02915.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25920/800x600_wbs-jaselka25-8-02915.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25921/wbs-jaselka25-9-02918.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25921/800x600_wbs-jaselka25-9-02918.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25922/wbs-jaselka25-10-02922.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25922/800x600_wbs-jaselka25-10-02922.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25923/wbs-jaselka25-12-02927.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25923/800x600_wbs-jaselka25-12-02927.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25924/wbs-jaselka25-14-02932.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25924/800x600_wbs-jaselka25-14-02932.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25925/wbs-jaselka25-16-02807.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25925/800x600_wbs-jaselka25-16-02807.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25926/wbs-jaselka25-18-02941.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25926/800x600_wbs-jaselka25-18-02941.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25927/wbs-jaselka25-19-02943.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25927/800x600_wbs-jaselka25-19-02943.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25928/wbs-jaselka25-23-02961.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25928/800x600_wbs-jaselka25-23-02961.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25929/wbs-jaselka25-24-02972.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25929/800x600_wbs-jaselka25-24-02972.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25930/wbs-jaselka25-26-02981.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25930/800x600_wbs-jaselka25-26-02981.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25931/wbs-jaselka25-30-02998.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25931/800x600_wbs-jaselka25-30-02998.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25932/wbs-jaselka25-33-03007.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25932/800x600_wbs-jaselka25-33-03007.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25933/wbs-jaselka25-34-03008.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25933/800x600_wbs-jaselka25-34-03008.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25934/wbs-jaselka25-36-03016.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25934/800x600_wbs-jaselka25-36-03016.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25935/wbs-jaselka25-38-02832.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25935/800x600_wbs-jaselka25-38-02832.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25936/wbs-jaselka25-41-03035.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25936/800x600_wbs-jaselka25-41-03035.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25937/wbs-jaselka25-42-03037.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25937/800x600_wbs-jaselka25-42-03037.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25938/wbs-jaselka25-45-03044.jpg" rel="prettyPhoto[gallery1]" ',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Jasełka',
    '',
    'https://wbs.pl/jaselka_-5190.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-94',
    'dzien-dziecka-w-kampusie-im-willyego-brandta-w-warszawie-3991',
    'Dzień Dziecka w Kampusie im. Willy''ego Brandta w Warszawie',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15819/800x600_img_20210601_114730.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Wczoraj w Kampusie Willy&rsquo;ego Brandta w Warszawie radośnie świętowaliśmy Dzień Dziecka. Dla dzieci i młodzieży przygotowaliśmy wiele zabaw, konkurs&oacute;w i warsztat&oacute;w. Oczywiście Dzień Dziecka nie m&oacute;gł odbyć się bez lod&oacute;w.   <br />
Najważniejszym jednak punktem dnia było obdarowanie dzieci i młodzieży prezentami z nowym logo Kampusu im. Willy''ego Brandta. Z wielką radością rozpoznawaliśmy je dziś na rano na wilanowskich ulicach, idących do szkoły w nowych bluzach, czapkach, z bidonami oraz teczkami z naszym patronem Willym Brandtem.<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15820/image-01-06-21-01-39.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15820/800x600_image-01-06-21-01-39.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15821/img_20210601_102024.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15821/800x600_img_20210601_102024.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15822/img-20210602-wa0008.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15822/800x600_img-20210602-wa0008.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15823/img_20210601_085901.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15823/800x600_img_20210601_085901.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15824/193474182_911847316267644_3247312843416325551_n_kopia.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15824/800x600_193474182_911847316267644_3247312843416325551_n_kopia.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15825/193515083_189011389666861_9142365189181537271_n_kopia.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15825/800x600_193515083_189011389666861_9142365189181537271_n_kopia.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15826/img-20210601-wa0004.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15826/800x600_img-20210601-wa0004.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15827/ma.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15827/800x600_ma.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15828/img_8514a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15828/800x600_img_8514a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15829/img_8511a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15829/800x600_img_8511a.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dzień Dziecka w Kampusie im. Willy''ego Brandta w Warszawie',
    '',
    'https://wbs.pl/dzien_dziecka_w_kampusie_im_willyego_brandta_w_warszawie-3991.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-95',
    'kreatywnie-przeciw-koronawirusowi-gazetka-szkolna-klasy-1c-3666',
    'Kreatywnie przeciw koronawirusowi. Gazetka szkolna klasy 1C',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14363/800x600_clipboard011.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Uczniowie klasy 1c przygotowali dla pozostałych uczni&oacute;w gazetkę szkolną WBS pełną artykuł&oacute;w, krzyż&oacute;wek, wywiad&oacute;w i wiele innych. <br />
Jak można spędzać wolny czas nie nudząc się?  Odpowiedź na to pytanie znajdziecie w załączniku.<br />
Gratulujemy uczniom za ich kreatywność! <br />
Cieszmy  się wolnym czasem :-)<br />
<br />
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Gazetka klasy 1C
				</td>
				<td>
					<a href="pub/cms/files/1332/gazetka_klasy_1c_nowe.pdf" title="Gazetka klasy 1C" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Kreatywnie przeciw koronawirusowi. Gazetka szkolna klasy 1C',
    '',
    'https://wbs.pl/kreatywnie_przeciw_koronawirusowi_gazetka_szkolna_klasy_1c-3666.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-96',
    'zdrowe-sniadanie-3390',
    'Zdrowe śniadanie',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13227/800x600_gesundesfr_19-799.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				16 października uczniowie szkoły WBS przygotowywali &bdquo;Zdrowe śniadanie&rdquo;. Jest to projekt, kt&oacute;ry stał się już tradycją od wielu lat. W tym roku brali w nim udział uczniowie klas 1-4.<br />
&bdquo;Zdrowe śniadanie&quot; daje nie tylko możliwość samodzielnego tworzenia pięknych i smacznych posiłk&oacute;w, ale r&oacute;wnież uświadamia uczniom, jak ogromny wpływ na nasze zdrowie ma prawidłowe odżywianie.<br />
Punktem kulminacyjnym jest prezentacja kulinarnych dzieł sztuki, a następnie wsp&oacute;lne ich skonsumowanie:)<br />
To była bardzo smaczna środa!<br />
<br />
Foto: Marek Kepiński<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13228/gesundesfr_19-556.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13228/800x600_gesundesfr_19-556.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13229/gesundesfr_19-561.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13229/800x600_gesundesfr_19-561.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13230/gesundesfr_19-579.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13230/800x600_gesundesfr_19-579.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13231/gesundesfr_19-589.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13231/800x600_gesundesfr_19-589.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13232/gesundesfr_19-594.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13232/800x600_gesundesfr_19-594.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13233/gesundesfr_19-608.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13233/800x600_gesundesfr_19-608.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13234/gesundesfr_19-632.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13234/800x600_gesundesfr_19-632.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13235/gesundesfr_19-635.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13235/800x600_gesundesfr_19-635.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13236/gesundesfr_19-645.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13236/800x600_gesundesfr_19-645.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13237/gesundesfr_19-657.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13237/800x600_gesundesfr_19-657.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13238/gesundesfr_19-664.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13238/800x600_gesundesfr_19-664.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13239/gesundesfr_19-667.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13239/800x600_gesundesfr_19-667.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13240/gesundesfr_19-671.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13240/800x600_gesundesfr_19-671.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13241/gesundesfr_19-839.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13241/800x600_gesundesfr_19-839.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13242/gesundesfr_19-865.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13242/800x600_gesundesfr_19-865.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13243/gesundesfr_19-872.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13243/800x600_gesundesfr_19-872.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13244/gesundesfr_19-884.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13244/800x600_gesundesfr_19-884.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13245/gesundesfr_19-885.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13245/800x600_gesundesfr_19-885.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13246/gesundesfr_19-906.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/phot',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Zdrowe śniadanie',
    '',
    'https://wbs.pl/zdrowe_sniadanie-3390.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-97',
    '7-grudnia-2020-szczegolnie-pamietny-dzien-dla-wbs-3830',
    '7 grudnia 2020 - szczególnie pamiętny dzień dla WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15135/800x600_20-12_kniefall-398.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: justify;">Już od kilku tygodni,w r&oacute;żnych klasach naszej szkoły uczniowie intensywnie pracują nad plakatami, kr&oacute;tkimi filmami, tekstami, rysunkami oraz prawdzą badania historyczno-polityczne.<br />
<br />
Powodem tych r&oacute;żnych działań była 50. rocznica wizyty państwowej Willy''ego Brandta w Polsce, pierwszego kanclerza Niemiec Zachodnich, kt&oacute;ry odwiedził naszą stolicę.<br />
<br />
Zatrzymał się wtedy w zamku w Wilanowie, bardzo blisko miejsca, w kt&oacute;rym dziś znajduje się nasza szkoła. W tym dniu, 7 grudnia, złożył wieniec pod pomnikiem Nieznanego Żołnierza i podpisał traktat polsko-niemiecki, w kt&oacute;rym uzgodniono stosunki dyplomatyczne i de facto uznano zachodnią granicę Polski.<br />
<br />
Uklęknięcie Willy''ego Brandta pod pomnikiem Bohater&oacute;w Getta wywarło ogromne wrażenie. Ten gest pokory i wstydu, wykonany przez byłego bojownika ruchu oporu, kt&oacute;ry nie był niczemu winny, został oceniony w&oacute;wczas w Republice Federalnej Niemiec jako kontrowersyjny i, co ciekawe, początkowo był ledwo zauważalny w Polsce.<br />
<br />
Dopiero w 1978 roku umożliwiono założenie w Warszawie niemieckiej szkoły, kt&oacute;ra ostatecznie nosiła jego imię i rozwinęła się w polsko-niemiecką szkołę spotkań i dialogu.<br />
<br />
W dniu rocznicy, 7 grudnia, niemiecki minister spraw zagranicznych, pan Maas, mimo napiętego harmonogramu zaszczycił nas swą obecnością (online) i porozmawiał z naszymi uczniami o tym wydarzeniu oraz jego znaczeniu w świetle dzisiejszej sytuacji politycznej.<br />
<br />
Otwarta i ożywiona dyskusja koncentrowała się na historycznym obciążeniu stosunk&oacute;w polsko-niemieckich, a zwłaszcza na niszczycielskich skutkach II wojny światowej. W szczeg&oacute;lności zauważono, że nie wszyscy w niemieckim społeczeństwie zdają sobie sprawę, że opr&oacute;cz słynnego Powstania w Getcie w 1943 roku, było też Powstanie Warszawskie w 1944 roku. Wielu Polak&oacute;w nadal ma wrażenie, że nie poświęca się wystarczająco dużo uwagi nieżydowskim polskim ofiarom II wojny światowej.<br />
<br />
W trakcie dyskusji pojawiły się wydarzenia historyczne z jeszcze dalszych okres&oacute;w historycznych, takie jak długi okres nieistnienia państwa polskiego po podziale w latach 1795-1918 oraz trauma porozumienia Ribbentrop-Mołotow z 1939 roku.<br />
<br />
Nasi uczniowie zajęli się r&oacute;wnież trudną sytuacją Polski jako sowieckiego państwa satelickiego po II wojnie światowej oraz wielorakimi wyzwaniami i możliwościami III Rzeczypospolitej po przełomie 1989/91 roku.<br />
<br />
To, jak bardzo poprawiły się od 1970 roku stosunki polsko-niemieckie stało się dla nas wszystkich jasne, gdy minister spraw zagranicznych Maas powiedział, że zaraz po naszej rozmowie online wymieni poglądy na temat bieżących kwestii bezpieczeństwa ze swoim polskim odpowiednikiem w Brukseli. Chciał też poinformować go o naszym spotkaniu i dyskusji.<br />
<br />
<img src="/pub/uploader/images/Clipboard27.jpg" alt="Clipboard27.jpg" width="500" height="226" /><br />
<br />
Po tym spotkaniu delegacja składająca się z Dyrekcji Szkoły i przedstawicieli Samorządu Uczniowskiego, Zarządu oraz nauczyciela historii pojechała pod pomnik Bohater&oacute;w  Betta, aby wraz z Ambasadą Niemiec złożyć wieniec i kwiaty o 10:43 - dokładnie w tym samym czasie, co 50 lat temu. Tekst naszej wstęgi upamiętnia ofiary getta warszawskiego i zwraca uwagę na gest pojednania naszego patrona.<br />
<br />
Następnie cała grupa udała się na plac Willy''ego Brandta tuż za Muzeum Żydowskim, na kt&oacute;rym znajduje się tablica z legendarnym hołdem Willy''ego Brandta złożonym bohaterom getta.<br />
<br />
<img src="/pub/uploader/images/20_12_Kniefall_380.jpg" alt="20_12_Kniefall_380.jpg" width="500" height="333" /><br />
<br />
Polsko - Niemiecka Szkoła Spotkań i Dialogu im. Willy''ego Brandta w Warszawie, kt&oacute;ra dumnie i świadomie nosi tę nazwę, zaprasza serdecznie całą społeczność szkolną i nie tylko, do obejrzenia wirtualnej wystawy na naszej stronie internetowej.<br />
Nasi uczniowie zajmowali się tą tematyką na r&oacute;żne sposoby. Z pewnością Was zaskoczą i zainspirują!<br />
<br />
Klasa 7 pracowała nad tematem &quot;Laureaci Nagrody Nobla&quot;.<br />
<br />
Klasy 6 i 8 przygotowały piękne plakaty i kr&oacute;tkie komiksy, kt&oacute;re pokazały to wydarzenie z perspektywy uczni&oacute;w.<br />
<br />
W klasie 10 powstały r&oacute;wnież udane plakaty i kr&oacute;tkie, warte obejrzenia filmy.<br />
<br />
Klasy od 10 do 12 przedstawiły na lekcjach historii ocenę tego historycznego wydarzenia z dzisiejszej perspektywy i przez pryzmat swych osobistych doświadczeń. <br />
<br />
Ponadto na stronie gł&oacute;wnej znajdują się liczne dokumenty fotograficzne i filmowe oraz prace artystyczne z ',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    '7 grudnia 2020 - szczególnie pamiętny dzień dla WBS',
    '',
    'https://wbs.pl/7_grudnia_2020__szczegolnie_pamietny_dzien_dla_wbs-3830.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-98',
    'trwa-rekrutacja-2021-22-3922',
    'Trwa rekrutacja 2021_22',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15529/800x600_08_einschulung_19-853.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: left;">Od jutra będziemy gościć w naszej szkole przyszłych pierwszoklasist&oacute;w, kt&oacute;rzy będą zdawać testy kwalifikacyjne do pionu międzynarodowego.</div>
<div style="text-align: left;">Trzymamy za nich kciuki i wierzymy, że wkr&oacute;tce dołączą do naszej szkolnej społeczności. <br />
A jak jest u nas? Zobaczcie sami 🙂.</div>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <iframe src="https://www.youtube.com/embed/1m-sQ3dPITc" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
<div style="text-align: center;"><span style="font-size: medium;"><strong><br />
</strong></span></div>
<div style="text-align: left;"><span style="background-color: rgb(255, 255, 153);"><span style="font-size: medium;"><strong>Dodatkowa rekrutacja do pionu międzynarodowego - termin spotkania 21.05.2021.</strong></span></span><span style="font-size: medium;"><strong><br />
<br />
Aktualne informacje dotyczące procesu rekrutacji znajdują się w zakładce &bdquo;</strong></span><a href="https://www.wbs.pl/rekrutacja-1357.html"><span style="font-size: medium;"><strong>Rekrutacja</strong></span></a><span style="font-size: medium;"><strong>&rdquo;.</strong></span></div>
<br />
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
<table width="850" cellspacing="1" cellpadding="1" border="0">
    <tbody>
        <tr>
            <td><img src="/pub/uploader/images/PL Wyr&oacute;żnia nas_finał_1.png" alt="PL Wyr&oacute;żnia nas_finał_1.png" width="515" height="1500" /> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td><br />
            <br />
            &nbsp;&nbsp;&nbsp; <img src="/pub/uploader/images/PL_Co_oferujemy_bez_logotypow.png" alt="PL_Co_oferujemy_bez_logotypow.png" width="600" height="1367" align="top" /></td>
        </tr>
    </tbody>
</table>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
<br />
<br />
<br />
<br />
<br />
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Szczegółowe informacje
				</td>
				<td>
					<a href="pub/cms/files/1567/ia__info.pptx" title="Szczegółowe informacje" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Trwa rekrutacja 2021_22',
    '',
    'https://wbs.pl/trwa_rekrutacja_2021_22-3922.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-99',
    'zakonczenie-roku-szkolnego-20-21-4085',
    'Zakończenie roku szkolnego 20_21',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/16410/800x600_wbs-zakonczenie-52-354.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Zdjęcia: Marek Kępiński<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/16411/wbs-zakonczenie-3-22.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16411/800x600_wbs-zakonczenie-3-22.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16412/wbs-zakonczenie-4-597.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16412/800x600_wbs-zakonczenie-4-597.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16413/wbs-zakonczenie-5-55.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16413/800x600_wbs-zakonczenie-5-55.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16414/wbs-zakonczenie-5-616.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16414/800x600_wbs-zakonczenie-5-616.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16415/wbs-zakonczenie-6-644.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16415/800x600_wbs-zakonczenie-6-644.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16416/wbs-zakonczenie-9-83.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16416/800x600_wbs-zakonczenie-9-83.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16417/wbs-zakonczenie-10-378.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16417/800x600_wbs-zakonczenie-10-378.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16418/wbs-zakonczenie-10-502.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16418/800x600_wbs-zakonczenie-10-502.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16419/wbs-zakonczenie-11-388.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16419/800x600_wbs-zakonczenie-11-388.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16420/wbs-zakonczenie-15-163.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16420/800x600_wbs-zakonczenie-15-163.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16421/wbs-zakonczenie-18-567.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16421/800x600_wbs-zakonczenie-18-567.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16422/wbs-zakonczenie-24-656.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16422/800x600_wbs-zakonczenie-24-656.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16423/wbs-zakonczenie-40-747.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16423/800x600_wbs-zakonczenie-40-747.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16424/wbs-zakonczenie-35-309.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16424/800x600_wbs-zakonczenie-35-309.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16425/wbs-zakonczenie-19-575.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16425/800x600_wbs-zakonczenie-19-575.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16426/wbs-zakonczenie-58-419.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16426/800x600_wbs-zakonczenie-58-419.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16427/wbs-zakonczenie-63-978.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16427/800x600_wbs-zakonczenie-63-978.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16428/wbs-zakonczenie-67-1023.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16428/800x600_wbs-zakonczenie-67-1023.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16429/wbs-zakonczenie-7-58.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16429/800x600_wbs-zakonczenie-7-58.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16430/wbs-zakonczenie-17-555.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16430/800x600_wbs-zakonczenie-17-555.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16431/wbs-zakonczenie-49-863.jpg" rel="prettyPhoto[gallery1]" title="" sty',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Zakończenie roku szkolnego 20_21',
    '',
    'https://wbs.pl/zakonczenie_roku_szkolnego_20_21-4085.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-100',
    'nagrania-do-podrecznikow-wydawnictwa-klettnasi-uczniowie-w-studiu-3547',
    'Nagrania do podręczników wydawnictwa Klett-nasi uczniowie w studiu',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14023/800x600_20200226_124425.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				05.02.2020 r. sześcioro uczennic i uczni&oacute;w z klasy 4a miało przyjemność gościć w studiu Start International Polska, gdzie nagrywali materiał do podręcznik&oacute;w wydawnictwa Klett Verlag.<br />
Było to wspaniałe doświadczenie dla dzieci, kt&oacute;re wykonały świetną pracę. Mogli  poczuć się jak prawdziwi aktorzy. Start International Studio jest jednym z najbardziej znanych studi&oacute;w w Polsce, nagrywającym głosy dubbingowe dla wielu film&oacute;w takich jak Madagaskar.<br />
Nagranie było projektem wsp&oacute;łpracy Akademii Muzycznej WBS i wydawnictwa Klett z Poznania.<br />
<br />
Marcin Lemiszewski<br />
Kierownik Akademii Muzycznej WBS<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14024/20200226_124428.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14024/800x600_20200226_124428.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nagrania do podręczników wydawnictwa Klett-nasi uczniowie w studiu',
    '',
    'https://wbs.pl/nagrania_do_podrecznikow_wydawnictwa_klettnasi_uczniowie_w_studiu-3547.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-101',
    'egzamin-abrsm-z-teorii-muzyki-3908',
    'Egzamin ABRSM z teorii muzyki',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15497/800x600_img_20210306_100334_resized_20210306_100839659.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				6 marca w ramach wsp&oacute;łpracy Akademii Muzycznej WBS z ABRSM Polska odbył się w naszej szkole brytyjski egzamin muzyczny z teorii muzyki Rady Brytyjskich Kr&oacute;lewskich Szk&oacute;ł Muzycznych (ABRSM). Zdanie piątego stopnia z teorii muzyki tego prestiżowego egzaminu i &oacute;smego stopnia z gry na instrumencie uprawnia do ubiegania się o studia muzyczne  na całym świecie. W tym roku szkolnym&nbsp;do tego egzaminu przystępuje kilkoro uczni&oacute;w z Akademii Muzycznej WBS.  <br />
Bardzo cieszymy się z tej wsp&oacute;łpracy. <br />
Trzymamy kciuki za zdających a szczeg&oacute;lnie za uczni&oacute;w Akademii Muzycznej WBS.<br />
<br />
Marcin Lemiszewski<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15498/wbs_abrsma.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15498/800x600_wbs_abrsma.png);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Egzamin ABRSM z teorii muzyki',
    '',
    'https://wbs.pl/egzamin_abrsm_z_teorii_muzyki-3908.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-102',
    'maj-ericha-kastnera-w-interpretacji-naszej-uczennicy-6a-3675',
    '"Maj" Ericha Kästnera w interpretacji naszej uczennicy (6A)',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14370/800x600_mai_www.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W ramach zajęć uczniowie klasy 6A otrzymali zadanie sfilmowania wiersza &bdquo;Maj&rdquo; Ericha K&auml;stnera. Chcielibyśmy zaprezentować Wam  interpretację Emilii. <br />
Gratulujemy wspaniałego nagrania!<br />
<br />
<br />
<iframe src="https://www.youtube.com/embed/rKAkOJ4Dh7w" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    '"Maj" Ericha Kästnera w interpretacji naszej uczennicy (6A)',
    '',
    'https://wbs.pl/maj_ericha_kastnera_w_interpretacji_naszej_uczennicy_6a-3675.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-103',
    'tydzien-doradztwa-zawodowego-i-targi-pracy-w-wbs-3965',
    'Tydzień Doradztwa Zawodowego i Targi Pracy w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15731/800x600_berufsmesse3.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<span style="font-size: larger;"><strong>Trudny wyb&oacute;r &ndash; Jaki zaw&oacute;d chciałbym wykonywać?</strong></span><span style="font-size: medium;"><strong><br />
</strong></span><br />
To pytanie z roku na rok staje się coraz ważniejsze i znaczące dla naszych uczni&oacute;w w wyższych klasach. W obliczu niemal nieograniczonego wyboru ścieżek edukacyjnych i kierunk&oacute;w studi&oacute;w, wyb&oacute;r nie jest łatwy. W samych Niemczech na studiach licencjackich i magisterskich oferowanych jest obecnie ponad 10 000 kierunk&oacute;w!<br />
Nasza szkoła organizuje we wsp&oacute;łpracy z Urzędem Pracy w Berlinie <strong>Tydzień Doradztwa Zawodowego</strong> dla uczni&oacute;w przedostatniej klasy (tzn. gł&oacute;wnie dla klasy 11). Po wykładzie uczniowie 11 klasy mogą skorzystać z godzinnego indywidualnego doradztwa opartego na ich własnych zainteresowaniach i umiejętnościach. W tym roku szkolnym za doradztwo zawodowe odpowiedzialna jest pani Vorster, kt&oacute;ra jest gotowa udzielić naszym uczniom pomocy i kompetentnego wsparcia.<br />
<br />
Innym ważnym elementem doradztwa w zakresie studi&oacute;w i wyboru ścieżki zawodowej są coroczne <strong>Targi Pracy w WBS</strong>, podczas kt&oacute;rych zaangażowani i wykwalifikowani przedstawiciele bardzo r&oacute;żnych dziedzin zawodowych opowiadają uczniom klas wyższych o swojej pracy. Wydarzenie to zostało pomyślnie przeprowadzone online 20 kwietnia. Pan Heinelt, tegoroczny prezydent niemieckojęzycznego <strong>Rotary Club Warszawa Goethe</strong>, był odpowiedzialny za organizację Targ&oacute;w Pracy online wsp&oacute;lnie z WBS. W 12 &quot;pokojach informacyjnych&quot; (breakout rooms) dostępnych było aż 28 ekspert&oacute;w z dziedzin prawa, ekonomii/przedsiębiorczości, finans&oacute;w, IT, inżynierii/matematyki, biotechnologii/farmacji, medycyny/dentystyki, spraw zagranicznych/polityki, medi&oacute;w/dziennikarstwa, uniwersytet&oacute;w, DAAD i agencji zatrudnienia. Wielkie przedsięwzięcie i zaangażowanie!<br />
W tym roku szkolnym doradztwo w zakresie studi&oacute;w i wyboru ścieżki zawodowej uzupełnione jest spotkaniem online z Uniwersytetem Technicznym w Berlinie, podczas kt&oacute;rego uczniowie klasy 11 otrzymają szczeg&oacute;łowe informacje na temat organizacji studi&oacute;w i wymagań związanych z rekrutacją.<br />
<br />
Norbert St&uuml;we<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Tydzień Doradztwa Zawodowego i Targi Pracy w WBS',
    '',
    'https://wbs.pl/tydzien_doradztwa_zawodowego_i_targi_pracy_w_wbs-3965.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-104',
    'swiateczny-projekt-muzyczny-online-akademii-muzycznej-wbs-i-wbs-3845',
    'Świąteczny projekt muzyczny online Akademii Muzycznej WBS i WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15185/800x600_www.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice, Drogie Uczennice i Uczniowie,<br />
<br />
mamy pow&oacute;d do radości <img src="https://wbs.pl/cms/class/extends/fckeditor/editor/images/smiley/msn/regular_smile.gif" alt="" />. <br />
<br />
Z okazji zbliżających się Świąt Bożego Narodzenia chcielibyśmy przedstawić Wam świąteczny projekt&nbsp; muzyczny online Akademii Muzycznej WBS i szkoły WBS, oparty na motywach kolędy &bdquo;Cicha noc&rdquo; i świątecznych piosenek  &bdquo;Santa claus is coming to town&rdquo; oraz &bdquo;Feliz navidad&rdquo;. Wzięło w nim udział prawie 70 os&oacute;b, w tym uczniowie, rodzice i nauczyciele.<br />
<br />
Ze względu na panującą sytuację epidemiologiczną wszyscy uczestnicy nagrywali swoje partie w domowych warunkach, bez możliwości spotkania się.<br />
Było to dla nas nie lada wyzwaniem, ale czas zbliżających się Świąt dodawał nam motywacji  do stworzenia tego wyjątkowego nagrania, niosącego ze sobą radość, nadzieję i świąteczne życzenia .<br />
<br />
Przed Wami nagranie,  poprzez kt&oacute;re chcemy pokazać, że muzyka jest dla nas bardzo ważna i chcemy się nią dzielić r&oacute;wnież w trudnych momentach.<br />
<br />
Zdrowych, Wesołych Świąt Bożego Narodzenia, spełnienia marzeń i realizacji plan&oacute;w oraz Szczęśliwego Nowego 2021 Roku !<br />
<br />
Składamy całej społeczności Campusu im. Willy''ego Brandta!<br />
<br />
Życzymy miłego słuchania!<br />
<br />
Marcin Lemiszewski<br />
Aldona Orman i Marco Eull<br />
<br />
<br />
<br />
<iframe src="https://www.youtube.com/embed/87B7kNNUWls" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Świąteczny projekt muzyczny online Akademii Muzycznej WBS i WBS',
    '',
    'https://wbs.pl/swiateczny_projekt_muzyczny_online_akademii_muzycznej_wbs_i_wbs-3845.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-105',
    'zdrowe-sniadanie-2844',
    'Zdrowe śniadanie',
    '',
    '',
    '15 października 2018',
    '
		<p class="lead">
			15 października 2018 
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/9995/800x600_gesfru_lr-130.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				15 października uczniowie szkoły WBS będą przygotowywali &bdquo;Zdrowe śniadanie&rdquo;. Jest to projekt, kt&oacute;ry stał się już tradycją od wielu lat. W tym roku będą brać w nim udział uczniowie klas 1-8.<br />
&bdquo;Zdrowe śniadanie&quot; daje nie tylko możliwość samodzielnego tworzenia pięknych i smacznych posiłk&oacute;w, ale r&oacute;wnież  uświadamia uczniom, jak ogromny wpływ na nasze zdrowie ma prawidłowe odżywianie.<br />
Punktem kulminacyjnym jest prezentacja kulinarnych dzieł sztuki,  a następnie wsp&oacute;lne ich skonsumowanie:)<br />
To był bardzo smaczny poniedziałek!<br />
<br />
Zdjęcia Marek Kępiński<br />
<br />
			</p>

		</div>
			

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/9990/gesfru_lr-134.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9990/800x600_gesfru_lr-134.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9989/gesfru_lr-19.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9989/800x600_gesfru_lr-19.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9991/gesfru_lr-28.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9991/800x600_gesfru_lr-28.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9992/gesfru_lr-32.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9992/800x600_gesfru_lr-32.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9993/gesfru_lr-73.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9993/800x600_gesfru_lr-73.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9994/gesfru_lr-85.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9994/800x600_gesfru_lr-85.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9996/gesfru_lr-133.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9996/800x600_gesfru_lr-133.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9997/gesfru_lr-138.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9997/800x600_gesfru_lr-138.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9998/gesfru_lr-145.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9998/800x600_gesfru_lr-145.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9999/gesfru_lr-151.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9999/800x600_gesfru_lr-151.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10000/gesfru_lr-157.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10000/800x600_gesfru_lr-157.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10001/gesfru_lr-163.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10001/800x600_gesfru_lr-163.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10002/gesfru_lr-172.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10002/800x600_gesfru_lr-172.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10003/gesfru_lr-175.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10003/800x600_gesfru_lr-175.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10004/gesfru_lr-182.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10004/800x600_gesfru_lr-182.jpg);">
			</a>
		</div>
		
	
</div>

		<a href="archiwum-1589.html" title="Archiwum" class="btn btn-default">Powrót do listy</a>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Zdrowe śniadanie',
    '15 października 2018',
    'https://wbs.pl/zdrowe_sniadanie-2844.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-106',
    'rozpoczecie-roku-szkolnego-20-21-3710',
    'Rozpoczęcie roku szkolnego 20_21',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14597/800x600_20-08_schulbegin-685.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Uczniowie,<br />
bardzo się cieszymy, że wreszcie Was widzimy i mamy nadzieję , że jesteście zdrowi i miło spędziliście wakacje.<br />
<br />
Wiemy, że nie czujecie się zbyt komfortowo, zakrywając twarze maseczkami, ale jest to konieczne, żebyśmy jak najdłużej  cieszyli się z obecności w szkole,  ze spotkań z kolegami i możliwości  korzystania z normalnej nauki. <br />
<br />
Za chwilę udacie się z wychowawcami do swoich klas, gdzie otrzymacie dokładne informacje, jakie zasady bezpieczeństwa będą nas od dzisiaj obowiązywały.<br />
<br />
Dodamy jeszcze, że w tym roku szkolnym będziemy obchodzili wyjątkowy jubileusz &ndash; 50 lecie ważnego wydarzenia, kiedy to patron naszej szkoły &ndash; Willy Brandt okazał Polsce i Polakom szacunek oraz chęć wsp&oacute;łpracy. Jest to dla naszej polsko-niemieckiej szkoły szczeg&oacute;lnie ważne. <br />
<br />
<br />
A teraz życzymy Wam udanego startu w nowym roku szkolnym!<br />
<br />
Mechthild Hinsberger Boguski<br />
Małgorzata Wr&oacute;bel<br />
<br />
Dyrekcja<br />
<br />
<br />
Zdjęcia: Marek Kępiński<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14598/20-08_schulbegin-198.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14598/800x600_20-08_schulbegin-198.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14599/20-08_schulbegin-250.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14599/800x600_20-08_schulbegin-250.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14600/20-08_schulbegin-266.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14600/800x600_20-08_schulbegin-266.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14601/20-08_schulbegin-275.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14601/800x600_20-08_schulbegin-275.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14602/20-08_schulbegin-280.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14602/800x600_20-08_schulbegin-280.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14603/20-08_schulbegin-297.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14603/800x600_20-08_schulbegin-297.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14604/20-08_schulbegin-332.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14604/800x600_20-08_schulbegin-332.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14605/20-08_schulbegin-353.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14605/800x600_20-08_schulbegin-353.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14606/20-08_schulbegin-386.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14606/800x600_20-08_schulbegin-386.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14607/20-08_schulbegin-537.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14607/800x600_20-08_schulbegin-537.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14608/20-08_schulbegin-574.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14608/800x600_20-08_schulbegin-574.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14609/20-08_schulbegin-599.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14609/800x600_20-08_schulbegin-599.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14610/20-08_schulbegin-743.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14610/800x600_20-08_schulbegin-743.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14611/20-08_schulbegin-699.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14611/800x600_20-08_schulbegin-699.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Rozpoczęcie roku szkolnego 20_21',
    '',
    'https://wbs.pl/rozpoczecie_roku_szkolnego_20_21-3710.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-107',
    'dzien-nauczyciela-w-wbs-3373',
    'Dzień Nauczyciela w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13097/800x600_img_20191014_091145.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<em><span style="font-size: medium;">Drodzy Nauczyciele, życzymy Wam wszystkiego najlepszego w dniu Waszego święta! Bez Was nie byłoby Campusu im. Willy''ego Brandta!<img src="https://wbs.pl/cms/class/extends/fckeditor/editor/images/smiley/msn/heart.gif" alt="" /></span></em><br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13098/img_20191014_091024.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13098/800x600_img_20191014_091024.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13099/img_20191014_105421.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13099/800x600_img_20191014_105421.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13100/img_20191014_091008.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13100/800x600_img_20191014_091008.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13101/img_20191014_122059.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13101/800x600_img_20191014_122059.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13102/img_20191014_135520.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13102/800x600_img_20191014_135520.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13103/img_20191014_091032.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13103/800x600_img_20191014_091032.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dzień Nauczyciela w WBS',
    '',
    'https://wbs.pl/dzien_nauczyciela_w_wbs-3373.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-108',
    '3-miejsce-dziewczyn-w-mistrzostwach-wilanowa-5184',
    '3. miejsce dziewczyn w Mistrzostwach Wilanowa',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/25893/800x600_4.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				&nbsp;Reprezentantki naszej szkoły w tenisie stołowym zajęły 3. miejsce w Mistrzostwach Wilanowa. Zawodniczki zaprezentowały bardzo dobrą formę, waleczność oraz duże zaangażowanie, zdobywając miejsce na podium.<br />
<br />
Gratulujemy świetnego wyniku!
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/25894/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25894/800x600_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25895/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25895/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25896/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25896/800x600_3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25897/4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25897/800x600_4.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25898/6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25898/800x600_6.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    '3. miejsce dziewczyn w Mistrzostwach Wilanowa',
    '',
    'https://wbs.pl/3_miejsce_dziewczyn_w_mistrzostwach_wilanowa-5184.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-109',
    'wizyta-powstanca-warszawskiego-3357',
    'Wizyta Powstańca Warszawskiego',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13042/800x600_p_2.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W połowie września br. naszą szkołę odwiedził Piotr Łubieński, żołnierz kompanii K-1 Pułku Armii Krajowej &bdquo;Baszta&rdquo; i więzień obozu koncentracyjnego w Stutthofie. Gość spotkał się z uczniami klas si&oacute;dmych i &oacute;smych. <br />
Opowiadał o Powstaniu Warszawskim, o walkach w poszczeg&oacute;lnych dzielnicach Warszawy, a także o żołnierskim szczęściu i pechu. <br />
Uczniowie zostali zaproszeni na odsłonięcie tablicy upamiętniającej obronę Reduty &bdquo;Chełmska 46&rdquo;, kt&oacute;rej bronił Piotr Łubieński. Miał wtedy 17 lat. Obecnie, jako 92 letni weteran chętnie spotyka się z młodzieżą i nauczycielami, aby przestrzec kolejne pokolenia przed wojną, kt&oacute;ra sieje śmierć i zniszczenie, rodzi nienawiść, niszczy całe narody, zbierając ofiary po obu stronach konfliktu. <br />
<br />
Halina Niemiec<br />
(historia)<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13041/p_6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13041/800x600_p_6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13043/p_8.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13043/800x600_p_8.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13044/p_12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13044/800x600_p_12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13045/p-4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13045/800x600_p-4.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13046/p_3a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13046/800x600_p_3a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13047/p_13.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13047/800x600_p_13.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13048/p_5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13048/800x600_p_5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13049/p_9.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13049/800x600_p_9.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wizyta Powstańca Warszawskiego',
    '',
    'https://wbs.pl/wizyta_powstanca_warszawskiego-3357.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-110',
    'wlasnie-tak-wygladaja-zwyciezcy-podziekowanie-dla-lukasza-sarbiewskiego-3329',
    'Właśnie tak wyglądają zwycięzcy: Podziękowanie dla Łukasza Sarbiewskiego',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/12878/800x600_danke!3.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Niestety odchodzi jeden z naszych najlepszych zawodnik&oacute;w na boisku. Wiele lat pokazywałeś nam, jak wykorzystywać sport jako środek dialogu w szkole spotkań. Dziękujemy Ci za wspaniałą wsp&oacute;łpracę. Będziemy kontynuować Twoją ścieżkę sukcesu, aby Akademia Piłkarska WBS pozostała integralną częścią kampusu im. Willy&rsquo;ego Brandta a tym samym miejscem wielu kolejnych spotkań.<br />
Życzymy Ci powodzenia i dalszych sukces&oacute;w!<br />
<br />
Zarząd NTS wraz z dyrekcją i administracją szkoły WBS<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Właśnie tak wyglądają zwycięzcy: Podziękowanie dla Łukasza Sarbiewskiego',
    '',
    'https://wbs.pl/wlasnie_tak_wygladaja_zwyciezcy_podziekowanie_dla_lukasza_sarbiewskiego-3329.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-111',
    'mistrzostwa-wilanowa-w-tenisie-stolowym-3512',
    'Mistrzostwa Wilanowa w tenisie stołowym',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13829/800x600_img_5076.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W dniach 16 i 17 stycznia odbyły się mistrzostwa Wilanowa w tenisie stołowym, w kt&oacute;rych brali udział nasi uczniowie z klasy 6: Julian Czapiewski, Michal Franciszkowski, Maciek Caruk, Sara Swirtun oraz Lena Glacel. Nasza młodsza reprezentacja po ciężkiej i emocjonującej grze  zajęła tym razem 5 miejsce.<br />
W rozgrywkach starszych uczni&oacute;w wzięły udział dziewczynki z 7 klasy: Julia Hyllus oraz Ala Błażeczek. W rozgrywkach chłopc&oacute;w brali udział uczniowie klasy 8: Tim Bock, Michał Henschel i Ferdynand Baggeroer.<br />
W tych rozgrywkach dziewczynki zajęły 1 miejsce. Chłopcy po pięknej grze i wyr&oacute;wnanym finale uplasowali się na drugim miejscu. Zar&oacute;wno chłopcy jak i dziewczynki z klas 7 i 8 awansowali do rozgrywek powiatowych i w styczniu będą walczyć na mistrzostwach Warszawy. <br />
Bardzo gratulujemy wszystkim uczestnikom i życzymy dalszych sukces&oacute;w!<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13830/img_5062.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13830/800x600_img_5062.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13831/img_5065.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13831/800x600_img_5065.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13832/img_5067.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13832/800x600_img_5067.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13833/img_5072.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13833/800x600_img_5072.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13834/img_5075.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13834/800x600_img_5075.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Mistrzostwa Wilanowa w tenisie stołowym',
    '',
    'https://wbs.pl/mistrzostwa_wilanowa_w_tenisie_stolowym_-3512.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-112',
    'kreativ-gegen-corona-druciane-postaci-w-ruchu-4014',
    'Kreativ gegen Corona. Druciane postaci w ruchu.',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/16027/800x600_www.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Rzeźby z drutu uczni&oacute;w klasy 9 wykonane z p. M. Swirtun<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/16021/img_5075.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16021/800x600_img_5075.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16022/img_5078.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16022/800x600_img_5078.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16023/img_5080.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16023/800x600_img_5080.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16024/img_5081.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16024/800x600_img_5081.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16025/img_5083.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16025/800x600_img_5083.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16026/img_5087.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16026/800x600_img_5087.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Kreativ gegen Corona. Druciane postaci w ruchu.',
    '',
    'https://wbs.pl/kreativ_gegen_corona_druciane_postaci_w_ruchu_-4014.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-113',
    'ferie-jesienne-2855',
    'Ferie jesienne',
    '',
    '',
    '18.10-04.11 Opieka popołudniowa podczas ferii jesiennych-relacja',
    '
		<p class="lead">
			18.10-04.11 Opieka popołudniowa podczas ferii jesiennych-relacja
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/10359/800x600_img_20181022_104055.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				W tym roku z zajęć organizowanych przez naszą szkołę i podczas ferii jesiennych skorzystało ponad 30 uczni&oacute;w klas 1-5.<br />
<br />
Nasz program obejmował:<br />
<br />
- wyście do Teatru Guliwer na spektakl &bdquo;Tata&ldquo;<br />
-	wyprawę z Fundacją &bdquo;Ja Wisła&ldquo; i poznanie starorzecza Wisły w rejonie Zawady (tam także ognisko)<br />
- trzydniowy pobyt w Willi Wilga, a tam warsztaty związane z poznaniem koni i kucyk&oacute;w, jazda konna, karmienie k&oacute;z i kr&oacute;lik&oacute;w, gry i zabawy<br />
- wycieczkę do Powsina i gra w kręgle<br />
- wyjście na basen przy ul. Wiertniczej<br />
<br />
Zapraszamy do obejrzenia fotoreportażu i oczywiście zapraszamy za rok!
<p>Zesp&oacute;ł opieki popołudniowej</p>
<br />
			</p>

		</div>
			

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/10360/img_20181022_104124.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10360/800x600_img_20181022_104124.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10361/img_20181022_112044.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10361/800x600_img_20181022_112044.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10362/img_20181022_112113.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10362/800x600_img_20181022_112113.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10363/img_20181022_115849_1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10363/800x600_img_20181022_115849_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10364/img_20181022_124039.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10364/800x600_img_20181022_124039.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10365/img_20181022_124632.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10365/800x600_img_20181022_124632.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10366/img_20181022_141745.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10366/800x600_img_20181022_141745.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10367/pa193726.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10367/800x600_pa193726.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10368/pa193750.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10368/800x600_pa193750.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10369/pa193753.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10369/800x600_pa193753.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10370/pa233996.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10370/800x600_pa233996.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10371/1.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10371/800x600_1.png);">
			</a>
		</div>
		
	
</div>

		<a href="archiwum-1589.html" title="Archiwum" class="btn btn-default">Powrót do listy</a>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Ferie jesienne',
    '18.10-04.11 Opieka popołudniowa podczas ferii jesiennych-relacja',
    'https://wbs.pl/ferie_jesienne-2855.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-114',
    'liveetap-krajowy-konkursu-jugend-musiziert-kopenhaga-2021-3919',
    'LIVE-Etap krajowy konkursu Jugend musiziert Kopenhaga 2021',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15526/800x600_www1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice i uczniowie,<br />
<br />
w dniach <strong>17-19.03.2021 </strong>odbędzie się etap krajowy konkursu Jugend musiziert Kopenhaga 2021.<br />
<br />
Z powodu pandemii odbędzie się on w formie online. Nagrane występy konkursowe będą transmitowane na żywo na kanale You Tube konkursu w Kopenhadze. Naszą szkołę będzie reprezentowało 16 uczestnik&oacute;w.<br />
<br />
Zapraszam wszystkich do kibicowania naszym i pozostałym uczestnikom i oglądania występ&oacute;w na kanale.<br />
<br />
Zgodnie z regulaminem konkursu Jugend musiziert w Niemczech, nagrań nie należy nagrywać. Można je oglądać tylko na żywo.<br />
<br />
Dokładne terminy występ&oacute;w znajdują się w załączniku oraz w aplikacji &quot;Jumu weltweit&quot; dostępnej do ściągnięcia w Sklepie Play.<br />
<br />
Pozdrawiam serdecznie <br />
<br />
Marcin Lemiszewski<br />
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Harmonogram występów Jugend musiziert 2021 Kopenhaga
				</td>
				<td>
					<a href="pub/cms/files/1544/vorspiele_landeswettbewerb_jugend_musiziert_2021_kopenhagen.pdf" title="Harmonogram występów Jugend musiziert 2021 Kopenhaga" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'LIVE-Etap krajowy konkursu Jugend musiziert Kopenhaga 2021',
    '',
    'https://wbs.pl/liveetap_krajowy_konkursu_jugend_musiziert_kopenhaga_2021-3919.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-115',
    'dynia-czy-kartofeldzien-3-3380',
    'Dynia czy kartofel-Dzień 3',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13189/800x600__dsc0617.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<u>Środa, 9.10. <br />
</u>
<ul>
    <li>Wielkie gotowanie i pieczenie dla całej społeczności szkolnej!</li>
    <li>Tworzenie dekoracji z warzyw.</li>
    <li>Quiz o dyni i ziemniakach.</li>
</ul>
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13190/_dsc0570.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13190/800x600__dsc0570.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13191/_dsc0575.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13191/800x600__dsc0575.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13192/_dsc0576.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13192/800x600__dsc0576.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13193/_dsc0586.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13193/800x600__dsc0586.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13194/_dsc0591.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13194/800x600__dsc0591.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13195/_dsc0596.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13195/800x600__dsc0596.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13196/_dsc0598.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13196/800x600__dsc0598.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13197/_dsc0600.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13197/800x600__dsc0600.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13198/_dsc0603.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13198/800x600__dsc0603.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13199/_dsc0615.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13199/800x600__dsc0615.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13200/_dsc0606.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13200/800x600__dsc0606.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13201/_dsc0612.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13201/800x600__dsc0612.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dynia czy kartofel-Dzień 3',
    '',
    'https://wbs.pl/dynia_czy_kartofeldzien_3-3380.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-116',
    'miedzynarodowy-dzien-praw-dziecka-w-wbs-3459',
    'Międzynarodowy Dzień Praw Dziecka w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13475/800x600_dsc03406.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Tw&oacute;j głos się liczy! Dni projektowe w szkole podstawowej<br />
<br />
W środę, 20 listopada i w piątek 22 listopada odbyły się w naszej szkolnej auli warsztaty na temat praw dziecka, kt&oacute;re przygotowali i przeprowadziła pani Firlej i pan Pommerening. Klasy 1a z 2c, 1c z 2a, 3a z 4c i 4a z 3c poznały na nich podstawowe prawa dzieci. <br />
Uczniowie obejrzeli też filmy o prawach dziecka, om&oacute;wili je w grupach roboczych w r&oacute;żnych klasach, przygotowali je wizualnie na plakatach i sporządzili deklarację praw dziecka dla szkoły.<br />
Na terenie szkoły odbyła się r&oacute;wnież gra ruchowa dla uczni&oacute;w, dorosłych i nauczycieli, w kt&oacute;rej najmłodsze dzieci mogły zebrać informacje o prawach dziecka.<br />
Wszystkim szczeg&oacute;lnie spodobała się akcja &quot;Dorośli życzą dzieciom....&quot;, w kt&oacute;rej dorośli mogli napisać na tablicy swoje życzenia dla dzieci z okazji Międzynarodowego Dnia Praw Dziecka. <br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13474/dsc03442.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13474/800x600_dsc03442.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13476/dsc03385.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13476/800x600_dsc03385.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13477/dsc03390.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13477/800x600_dsc03390.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13478/dsc03393.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13478/800x600_dsc03393.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13479/dsc03398.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13479/800x600_dsc03398.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13480/dsc03403.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13480/800x600_dsc03403.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13481/dsc03408.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13481/800x600_dsc03408.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13482/dsc03411.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13482/800x600_dsc03411.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13483/dsc03412.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13483/800x600_dsc03412.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13484/dsc03412.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13484/800x600_dsc03412.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13485/dsc03414.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13485/800x600_dsc03414.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13486/dsc03435.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13486/800x600_dsc03435.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13487/dsc03443.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13487/800x600_dsc03443.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13488/dsc03438.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13488/800x600_dsc03438.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Międzynarodowy Dzień Praw Dziecka w WBS',
    '',
    'https://wbs.pl/miedzynarodowy_dzien_praw_dziecka_w_wbs-3459.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-117',
    'zakonczenie-roku-szkolnego-2019-20-3700',
    'Zakończenie roku szkolnego 2019_20',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14560/800x600_img_20200703_080230.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Rok szkolny 2019/20 dobiegł końca. Było on, z powodu panującej sytuacji, wyjątkowy, jednak radość ze spotkania  nauczycieli i szkolnych koleg&oacute;w i koleżanek była nie do opisania! Wierzymy, że w sierpniu spotkamy się zdrowi w naszym budynku, by wsp&oacute;lnie powitać nowy rok szkolny. <br />
Życzymy Wam odpoczynku i pięknych wakacji oraz dużo pozytywnej energii!<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14561/img_20200703_080128.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14561/800x600_img_20200703_080128.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14562/img_20200703_080355.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14562/800x600_img_20200703_080355.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14563/img_20200703_080529.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14563/800x600_img_20200703_080529.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14564/img_20200703_082603.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14564/800x600_img_20200703_082603.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14565/img_20200703_091157.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14565/800x600_img_20200703_091157.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14566/img_20200703_181905.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14566/800x600_img_20200703_181905.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14567/part_1593792871049.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14567/800x600_part_1593792871049.jpeg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Zakończenie roku szkolnego 2019_20',
    '',
    'https://wbs.pl/zakonczenie_roku_szkolnego_2019_20-3700.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-118',
    'duze-wyzwanie-nowe-mozliwosci-przechodzimy-na-nauczanie-cyfrowe-3572',
    'Duże wyzwanie, nowe możliwości. Przechodzimy na nauczanie cyfrowe.',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14075/800x600_e-learning-platform.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Sytuacja, kt&oacute;ra obecnie panuje, stanowi dla nas wszystkich wielkie wyzwanie. Czeka nas czas zupełnie innego podejścia zar&oacute;wno do nauki, jak i do nauczania.<br />
<br />
Od kilku dni zesp&oacute;ł nauczycieli opracowuje model skutecznego procesu e-nauczania. Przygotowują materiały do nauki, organizują prace domowe, a następnie sprawdzają wykonane przez uczni&oacute;w zadania. Materiał do nauczania przygotowywany jest dla uczni&oacute;w w taki spos&oacute;b, aby mogli oni zdobywać nową wiedzę poprzez samodzielną naukę. <br />
Jesteśmy świadomi, że rodzice, będący w sytuacji r&oacute;wnież dla nich nowej nie zawsze są w stanie zapewnić dzieciom aktywną, intensywną pomoc przy lekcjach. Niemalże na całym świecie dostrzega się problem uczni&oacute;w przeciążonych otrzymywanymi online materiałami do nauki, co stanowi wielkie wyzwanie dla wszystkich.<br />
<br />
Dlatego kierownictwo szkoły, kierownictwo grupy pedagog&oacute;w odpowiedzialnej za zarządzanie jakością kształcenia oraz nasz serwis IT intensywnie pracują nad koncepcją e-nauczania. Naszym celem jest dostosowanie zadań do możliwości pracy zar&oacute;wno uczni&oacute;w jak i nauczycieli. <br />
Ważne jest bowiem, aby przygotowane zadania były jasne i czytelne.<br />
<br />
Bardzo dziękujemy za Państwa zaangażowanie i zrozumienie.<br />
<br />
Jeśli macie Państwo pytania, jesteśmy dyspozycji. Dyrekcja, grono pedagogiczne oraz administracja są osiągalni każdego dnia telefonicznie lub za pośrednictwem poczty e-mail. <br />
<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14085/img_20200319_142303.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14085/800x600_img_20200319_142303.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14086/img-20200320-wa0000.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14086/800x600_img-20200320-wa0000.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Duże wyzwanie, nowe możliwości. Przechodzimy na nauczanie cyfrowe.',
    '',
    'https://wbs.pl/duze_wyzwanie_nowe_mozliwosci_przechodzimy_na_nauczanie_cyfrowe_-3572.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-119',
    'uroczyste-pozegnanie-maturzystow-wbs-3690',
    'Uroczyste pożegnanie maturzystów WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14521/800x600_wbs-abi-511.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Verabschiedung und Zeugnis&uuml;bergabe<br />
<br />
Unter strikter Beachtung der Hygienevorschriften durfte die Schule gl&uuml;cklicherweise doch noch eine Veranstaltung zur Zeugnis&uuml;bergabe durchf&uuml;hren. Am Montag, den 22. Juni 2020 fand um 17.00 in unserer Turnhalle die feierliche Verabschiedung der Abiturientinnen und Abiturienten sowie die Ehrung der Absolventen des Mittleren Bildungsabschlusses (MBA) statt.<br />
<br />
Nach der Begr&uuml;&szlig;ung durch Frau Boguski gratulierte der deutsche Botschafter Herr Rolf Nikel allen Absolventen ganz herzlich und betonte in seinem Gru&szlig;wort ganz besonders die hervorragenden Leistungen und die Mittlerrolle unserer Sch&uuml;lerinnen und Sch&uuml;ler im deutsch-polnischen Verh&auml;ltnis. Es folgte die feierliche &Uuml;bergabe der Zeugnisse. <br />
<br />
Der Vorstandsvorsitzende Herr Franciszkowski nutzte die Gelegenheit, sich im Namen der Schule von Herrn Nikel zu verabschieden und sich f&uuml;r die jahrelange gute Zusammenarbeit mit der Botschaft ausdr&uuml;cklich zu bedanken.<br />
<br />
In ihrer originellen Abiturrede, die mit gro&szlig;er Begeisterung aufgenommen wurde, verwandelte sich Frau Boguski in Frau Agathe, die mit der Glaskugel und vielen weiteren Requisiten einen humorvollen Blick in die m&ouml;gliche Zukunft unserer diesj&auml;hrigen Absolventen wagte. <br />
<br />
Anschlie&szlig;end leiteten die beiden Moderatoren Frau Jeleniak, die alle Sch&uuml;lerinnen und Sch&uuml;ler seit 12 Jahren begleitet hat und der fr&uuml;here Klassenlehrer Herr St&uuml;we zum n&auml;chsten Programmpunkt &uuml;ber, der &Uuml;bergabe der Schildkr&ouml;ten durch Frau Rytel. Diese wurden an diejenigen &uuml;berreicht, die seit dem Kindergarten auf unserer Schule waren. Im Falle der Klasse 12 sind es insgesamt f&uuml;nf Sch&uuml;lerinnen und Sch&uuml;ler, die der WBS von Anfang an verbunden waren.<br />
<br />
Im n&auml;chsten Teil der Feierstunde wurden Preise f&uuml;r ganz besondere Leistungen verliehen. Der Vorstand &uuml;berreichte Aleksandra Fila den diesj&auml;hrigen Willy-Brandt-Preis, eine Ehrung f&uuml;r hervorragende intellektuelle Leistungen und soziales Engagement.<br />
<br />
Der Scheffler &ndash; Preis, eine Auszeichnung f&uuml;r hervorragende Leistungen im Bereich der Germanistik, wurde nach einer kurzen Laudatio von Herrn Walz an Matylda Kuzinska &uuml;berreicht. <br />
<br />
Keine &Uuml;berraschung war der Empf&auml;nger des diesj&auml;hrigen Physikpreises. Mark Passia, der sich seit Jahren f&uuml;r dieses Fach begeistert, erhielt diese Auszeichnung von Herrn Bornmann.<br />
<br />
Die Klassenlehrerinnen der 10. und der 12. Klasse, Frau Dr. Biermann und Frau Rahn betonten in ihren Gru&szlig;worten das Engagement der Sch&uuml;lerinnen und Sch&uuml;ler, den Einsatz f&uuml;r die Klassengemeinschaft sowie die hohe Lernbereitschaft und die z.T. herausragenden Ergebnisse. Sie w&uuml;nschten den Abg&auml;ngerinnen und Abg&auml;ngern alles erdenklich Gute f&uuml;r den weiteren Lebensweg und eine gl&uuml;ckliche Hand bei den vielen Entscheidungen bzw. neuen Wegen, die jetzt beschritten werden.<br />
<br />
F&uuml;r die Klasse ergriffen Nina Hartmann und Alexander Sztemberg das Wort, die eine kurze R&uuml;ckschau auf ihre Schulzeit gaben und Worte  des Dankes an die Eltern und Lehrer fanden.<br />
<br />
Zum Abschluss der w&uuml;rdevollen und gelungenen Veranstaltung wies Herr Pommerening auf die Alumniarbeit der WBS hin. Dies ist eine gute M&ouml;glichkeit, mit der Schule und der Schulgemeinschaft in Kontakt zu bleiben.<br />
<br />
Musikalisch wurde die Feierstunde sehr gekonnt von Kasia Osokin (10. Klasse) am Klavier begleitet.<br />
<br />
Alle guten W&uuml;nsche begleiten unsere diesj&auml;hrigen Schulabsolventen! Die Schulgemeinschaft freut sich schon jetzt auf ein Wiedersehen in nicht allzu weiter Zukunft!<br />
<br />
Norbert St&uuml;we<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14502/wbs-abi-514.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14502/800x600_wbs-abi-514.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14503/wbs-abi-78.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14503/800x600_wbs-abi-78.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14504/wbs-abi-82.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14504/800x600_wbs-abi-82.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14505/wbs-abi-93.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14505/800x600_wbs-abi-93.jpg);">
			</a>
		</div>
		
				<div ',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Uroczyste pożegnanie maturzystów WBS',
    '',
    'https://wbs.pl/uroczyste_pozegnanie_maturzystow_wbs-3690.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-120',
    'wbsbleibtzuhause-3597',
    '#WBSbleibtzuhause',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14129/800x600_wbsbleibtzuhause1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<span style="color: rgb(0, 0, 255);"><span style="font-size: medium;"><span style="font-family: Arial;"><strong>#WBSbleibtzuhause</strong></span></span></span><br />
<br />
Od trzech tygodni nie wychodzimy z domu. Powoli zaczynamy się do tego przyzwyczajać. Bycie w domu przez cały dzień rozbudza naszą kreatywność. <br />
Jak spędzacie sw&oacute;j wolny czas? <br />
Jak wygląda nauka? Wyślijcie nam swoje zdjęcia. <br />
Dodamy je do naszej galerii zdjęć.<br />
Poniżej znajdziecie zdjęcia, kt&oacute;re otrzymaliśmy do tej pory od nauczycieli i uczni&oacute;w WBS .<br />
<br />
Na zdjęciach: <br />
Mini-ogr&oacute;dek na nasze szkolne podw&oacute;rko, stworzony przez panią Rytel<br />
Piękne postaci wykonane z ciastoliny na lekcji o epoce kamienia. Uczniowie, z własnoręcznie wykonanej w domu ciastoliny, modelowali własne dzieła, na wz&oacute;r tych z epoki kamienia (klasa 3 a)<br />
Pomysł na aktywność sportową w domu! <br />
<br />
Czekamy na Wasze inspiracje, zdjęcia i opowieści :-))<br />
<br />
<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14130/20200317_120937.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14130/800x600_20200317_120937.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14131/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14131/800x600_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14132/6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14132/800x600_6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14133/15.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14133/800x600_15.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14134/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14134/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14135/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14135/800x600_3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14136/4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14136/800x600_4.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14137/5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14137/800x600_5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14138/7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14138/800x600_7.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14139/8.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14139/800x600_8.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14140/9.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14140/800x600_9.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14141/10.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14141/800x600_10.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14142/14.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14142/800x600_14.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14143/11a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14143/800x600_11a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14144/12a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14144/800x600_12a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14145/13a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14145/800x600_13a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14146/90847504_2961431873879875_7966543260334161920_n.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14146/800x600_90847504_2961431873879875_7966543260334161920_n.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    '#WBSbleibtzuhause',
    '',
    'https://wbs.pl/wbsbleibtzuhause-3597.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-121',
    'willy-brandt-projekt-klasy-3a-i-3c-3862',
    'Willy Brandt. Projekt klasy 3A i 3C',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15229/800x600_willy_brandt_projekt2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W grudniu opr&oacute;cz 50 rocznicy słynnego gestu Willy&rsquo;ego Brandta pod pomnikiem Bohater&oacute;w Getta w Warszawie obchodziliśmy r&oacute;wnież urodziny naszego patrona. Z tej okazji klasy 3 wzięły udział w projekcie zorganizowanym przez p. Ewę Wojnarską-Gogolę dotyczącym życia i misji Willy&rsquo; ego Brandta oraz jego roli w budowaniu więzi polsko-niemieckiej. <br />
<br />
Zapraszamy do obejrzenia fotogalerii.<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15225/5.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15225/800x600_5.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15226/7.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15226/800x600_7.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15230/1.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15230/800x600_1.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15231/2.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15231/800x600_2.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15232/4.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15232/800x600_4.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15233/8.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15233/800x600_8.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15234/9.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15234/800x600_9.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15235/11.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15235/800x600_11.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15236/13.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15236/800x600_13.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15237/14.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15237/800x600_14.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15238/15.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15238/800x600_15.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15239/18.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15239/800x600_18.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15240/19.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15240/800x600_19.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15241/20201201_152248.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15241/800x600_20201201_152248.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15242/dsc01614.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15242/800x600_dsc01614.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15243/img_6758.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15243/800x600_img_6758.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15244/3a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15244/800x600_3a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15245/17a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15245/800x600_17a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15246/10.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15246/800x600_10.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15247/12.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15247/800x600_12.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15248/16.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15248/800x600_16.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15249/img_1443_2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15249/800x600_img_1443_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15250/willy_brandt_proj',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Willy Brandt. Projekt klasy 3A i 3C',
    '',
    'https://wbs.pl/willy_brandt_projekt_klasy_3a_i_3c-3862.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-122',
    'projekt-laureaci-pokojowej-nagrody-nobla-klasa-7c-i-8a-3825',
    'Projekt: Laureaci Pokojowej Nagrody Nobla (Klasa 7c i 8a)',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15085/800x600_image0.jpeg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Martti Ahtisaari
				</td>
				<td>
					<a href="pub/cms/files/1441/a_yakubov_-_2.12._arbeit_an_den_plakaten_friedensnobelpreisträger_online.pptx" title="Martti Ahtisaari" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Liu Xiaobo
				</td>
				<td>
					<a href="pub/cms/files/1442/liu_xiaobo_final._lesinska.pptx" title="Liu Xiaobo" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Lech Wałęsa
				</td>
				<td>
					<a href="pub/cms/files/1443/walesa.pdf" title="Lech Wałęsa" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Willy Brandt
				</td>
				<td>
					<a href="pub/cms/files/1444/willy_brandt.pdf" title="Willy Brandt" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Dalai Lama
				</td>
				<td>
					<a href="pub/cms/files/1445/dalai_lama_karol_bekiera_(1).pdf" title="Dalai Lama" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Mahatma Gandhi
				</td>
				<td>
					<a href="pub/cms/files/1446/mahatma_gandhi.pdf" title="Mahatma Gandhi" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15086/img_8089.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15086/800x600_img_8089.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15087/20201129_190140.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15087/800x600_20201129_190140.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15088/20201204_154657.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15088/800x600_20201204_154657.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15089/20201205_234146.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15089/800x600_20201205_234146.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15090/img_7448.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15090/800x600_img_7448.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15091/img_20201204_203853.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15091/800x600_img_20201204_203853.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15092/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15092/800x600_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15093/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15093/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15094/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15094/800x600_3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15095/4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15095/800x600_4.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15096/5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15096/800x600_5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15097/6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15097/800x600_6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15098/12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15098/800x600_12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15099/7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15099/800x600_7.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15100/9.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15100/800x600_9.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15101/8.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15101/800x600_8.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/phot',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Projekt: Laureaci Pokojowej Nagrody Nobla (Klasa 7c i 8a)',
    '',
    'https://wbs.pl/projekt_laureaci_pokojowej_nagrody_nobla_klasa_7c_i_8a-3825.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-123',
    'koronawirus-kolejne-kroki-w-walce-z-pandemia-3582',
    'Koronawirus. Kolejne kroki w walce z pandemią',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14094/800x600_www1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Wczoraj premier M. Morawiecki i minister zdrowia Ł. Szumowski ogłosili kolejne ograniczenia mające na celu opanowanie rozprzestrzeniania się wirusa w Polsce.<br />
<br />
Przedstawiamy gł&oacute;wne punkty:<br />
<br />
- Minimalna odległość między ludźmi w miejscach publicznych wzrosła do 2 metr&oacute;w. Wyjątek stanowią rodziny i opiekunowie.<br />
<br />
- Dzieci i młodzież poniżej 18 roku życia mogą przebywać w przestrzeni publicznej tylko w towarzystwie dorosłych.<br />
<br />
- Ograniczenia w dostępie do park&oacute;w, plaż, nabrzeży, itp.<br />
<br />
- Wypożyczalnie rower&oacute;w zostają zamknięte.<br />
<br />
- Liczba os&oacute;b, kt&oacute;re mogą przebywać w sklepie w tym samym czasie jest ograniczona do maksymalnie 3 na kasę. Wejście możliwe tylko w rękawiczkach ochronnych.<br />
<br />
- Na poczcie dozwolone są maksymalnie 2 osoby przy okienku.<br />
<br />
- Na targach publicznych dopuszcza się obecność maksymalnie 3 os&oacute;b przy stoisku.<br />
<br />
-&nbsp; Sklepy spożywcze, apteki i drogerie pozostają otwarte. Od 10.00 do 12.00 sklepy są otwarte wyłącznie dla senior&oacute;w powyżej 65 roku życia. W weekendy sklepy budowlane pozostają zamknięte. <br />
<br />
- R&oacute;wnież w miejscach pracy odległości pomiędzy pracownikami powinny wynosić co najmniej 1,5 m. Pracownicy powinni być odpowiednio wyposażeni w rękawiczki ochronne lub środki dezynfekujące.<br />
<br />
- Hotele i miejsca noclegowe będą zamknięte, z wyjątkiem tych, w kt&oacute;rych odbywa się kwarantanna lub tych, z kt&oacute;rych korzysta personel medyczny.<br />
<br />
- Przedłużenie kwarantanny domowej: od dziś osoby poddane kwarantannie będą izolowane (w tym od swoich rodzin) lub będą musiały przejść kwarantannę razem z rodzinami. Rozporządzenie to dotyczy os&oacute;b, kt&oacute;re od momentu wejścia w życie niniejszego rozporządzenia będą podlegać kwarantannie.<br />
<br />
- W prywatnych środkach transportu stosowane będą podobne ograniczenia dotyczące liczby pasażer&oacute;w, jak w transporcie publicznym (tylko połowa miejsc może być zajęta).<br />
<br />
- Wszystkie usługi rehabilitacyjne, kt&oacute;re nie są pilne dla zdrowia pacjenta, zostaną zawieszone.<br />
<br />
- Wymagana jest dezynfekcja wszystkich powierzchni dotykanych przez klient&oacute;w sklep&oacute;w, stacji benzynowych itp.<br />
<br />
<br />
Szczeg&oacute;łowe informacje znajdują się w komunikacie prasowym Ministerstwa Zdrowia: https://www.gov.pl/web/koronawirus/kolejne-kroki.<br />
<br />
Życzymy dużo zdrowia!<br />
<br />
<br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Koronawirus. Kolejne kroki w walce z pandemią',
    '',
    'https://wbs.pl/koronawirus_kolejne_kroki_w_walce_z_pandemia-3582.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-124',
    'most-szkolny-w-weimarze-2019-3362',
    'Most szkolny w Weimarze 2019',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13064/800x600_img_2272.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				20 września, już o 5 rano byliśmy wraz z panią St&uuml;we w drodze do Weimaru. Trwające tydzień europejskie spotkanie, jakim jest &quot;Most szkolny w Weimarze&quot;&nbsp; poświęcone było tematowi  &ldquo;Experimentierfeld Weimar. Zwischen Tr&auml;ume nund Albtr&auml;umen - alles war m&ouml;glich&rdquo;. Wraz z innymi uczestnikami z Niemiec, Włoch i Słowacji poznaliśmy miasto Weimar i fragment historii&nbsp; Republiki Weimarskiej. Opr&oacute;cz tradycyjnych zajęć braliśmy udział w warsztatach poświęconych takim tematom jak teatr, fotografia i karykatura. Nawiązaliśmy wiele przyjaźni i mamy nadzieję, że pozostaniemy w kontakcie z innymi uczestnikami projektu. Jesteśmy bardzo zadowoleni z uczestnictwa w tegorocznym &quot;Moście szkolnym w Weimarze&quot;.<br />
<br />
Olga Rybałt, Kl. 11<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13065/img_2233.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13065/800x600_img_2233.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13066/img_2247.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13066/800x600_img_2247.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13067/img_2254.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13067/800x600_img_2254.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13068/img_2229a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13068/800x600_img_2229a.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Most szkolny w Weimarze 2019',
    '',
    'https://wbs.pl/most_szkolny_w_weimarze_2019-3362.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-125',
    'konsultacje-psychologiczne-online-3577',
    'Konsultacje psychologiczne online',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14080/800x600_psycho_pl1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Rodzice, drodzy uczniowie,<br />
<br />
poniżej podajemy godziny dyżur&oacute;w naszych pedagog&oacute;w szkolnych pani Sarneckiej, pana Pommereninga i psycholog szkolnej dr Kondrackiej.  Indywidualne terminy prosimy ustalić z poszczeg&oacute;lnymi osobami drogą mailową.  <br />
<br />
<br />
Pani Dr Joanna Kondracka: poniedziałek - piątek w godzinach 14-16 (j.kondracka@ewbs.pl) <br />
<br />
Pan Pommerening: wtorek i czwartek w godzinach 14-16 (a.pommerening@ewbs.pl)<br />
<br />
Pani Sarnecka: poniedziałek - środa w godzinach 14-15:30 (j.sarnecka@ewbs.pl)<br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Konsultacje psychologiczne online',
    '',
    'https://wbs.pl/konsultacje_psychologiczne_online-3577.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-126',
    'polfinal-mistrzostw-warszawy-w-badmintonie-po-zwyciestwie-w-mistrzostwach-wilanowa-5186',
    'Półfinał Mistrzostw Warszawy w badmintonie po zwycięstwie w Mistrzostwach Wilanowa',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/25905/800x600_4.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				&nbsp;Nasi uczniowie Stanisław i Ludwik z po wygraniu Mistrzostw Wilanowa reprezentowali szkołę na mistrzostwach Warszawy w badmintona. Po czterech zaciętych meczach, odpadli w p&oacute;łfinale, co jest naprawdę dobrym wynikiem. <br />
<br />
Życzymy chłopcom dalszych sukces&oacute;w!
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/25906/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25906/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25907/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25907/800x600_3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25908/4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25908/800x600_4.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Półfinał Mistrzostw Warszawy w badmintonie po zwycięstwie w Mistrzostwach Wilanowa',
    '',
    'https://wbs.pl/polfinal_mistrzostw_warszawy_w_badmintonie_po_zwyciestwie_w_mistrzostwach_wilanowa-5186.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-127',
    'dzien-mamy-w-wbs-3989',
    'Dzień Mamy w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15794/800x600_21-05_muttertag-248.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drogie Mamy, to był naprawdę pracowity dzień dla Waszych dzieci. Z wielką miłością w oczach, przez cały dzień rysowały cudowne serca i portrety, tylko dla Was. ❤️<br />
Życzymy Wam wszystkiego najlepszego z okazji Dnia Matki!<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15795/21-05_muttertag-16.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15795/800x600_21-05_muttertag-16.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15797/21-05_muttertag-80.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15797/800x600_21-05_muttertag-80.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15798/21-05_muttertag-86.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15798/800x600_21-05_muttertag-86.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15774/20210526_114522.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15774/800x600_20210526_114522.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15780/img_20210526_084026.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15780/800x600_img_20210526_084026.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15796/21-05_muttertag-33.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15796/800x600_21-05_muttertag-33.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15781/img_20210526_084113.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15781/800x600_img_20210526_084113.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15799/21-05_muttertag-130.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15799/800x600_21-05_muttertag-130.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15800/21-05_muttertag-220.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15800/800x600_21-05_muttertag-220.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15802/21-05_muttertag-137.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15802/800x600_21-05_muttertag-137.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15803/21-05_muttertag-176.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15803/800x600_21-05_muttertag-176.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15804/21-05_muttertag-211.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15804/800x600_21-05_muttertag-211.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15818/21-05_muttertag-42.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15818/800x600_21-05_muttertag-42.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dzień Mamy w WBS',
    '',
    'https://wbs.pl/dzien_mamy_w_wbs_-3989.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-128',
    'koncert-mikolajkowy-akademii-muzycznej-wbs-3474',
    'Koncert Mikołajkowy Akademii Muzycznej WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13550/800x600_nikolaus-konzert-2019-388.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				3 grudnia o 17.30 odbył się w auli naszej szkoły <strong>Koncert Mikołajkowy Akademii Muzycznej WB</strong><strong>S</strong>. Wystąpiło ponad pięćdziesięcioro uczestnik&oacute;w&nbsp;z Akademii Muzycznej WBS i naszej szkoły grających na r&oacute;żnych instrumentach muzycznych. Poza występami wokalnymi mogliśmy posłuchać gry na fortepianie, perkusji, gitarze, flecie i skrzypcach. <br />
Koncert zakończył się wizytą Św. Mikołaja, kt&oacute;ry wręczył uczestnikom prezenty. na pamiątkę tego wieczoru dzieci otrzymały dyplomy i słodkości.<br />
Scenę ozdobiły prace plastyczne uczni&oacute;w wykonane pod kierunkiem pani Marzeny Swirtun. Koncert był okazją zaprezentowania swoich umiejętności muzycznych i zachętą do dalszej nauki gry na instrumentach i rozwijania pasji muzyki. <br />
<br />
Dyrektor Akademii Muzycznej WBS<br />
Marcin Lemiszewski<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13551/nikolaus-konzert-2019-38.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13551/800x600_nikolaus-konzert-2019-38.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13552/nikolaus-konzert-2019-144.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13552/800x600_nikolaus-konzert-2019-144.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13553/nikolaus-konzert-2019-208.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13553/800x600_nikolaus-konzert-2019-208.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13554/nikolaus-konzert-2019-229.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13554/800x600_nikolaus-konzert-2019-229.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13555/nikolaus-konzert-2019-258.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13555/800x600_nikolaus-konzert-2019-258.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13556/nikolaus-konzert-2019-326.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13556/800x600_nikolaus-konzert-2019-326.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13557/nikolaus-konzert-2019-375.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13557/800x600_nikolaus-konzert-2019-375.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13558/nikolaus-konzert-2019-264.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13558/800x600_nikolaus-konzert-2019-264.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13559/nikolaus-konzert-2019-164.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13559/800x600_nikolaus-konzert-2019-164.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13560/nikolaus-konzert-2019-21.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13560/800x600_nikolaus-konzert-2019-21.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13561/nikolaus-konzert-2019-197.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13561/800x600_nikolaus-konzert-2019-197.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13586/nikolaus-konzert-2019-3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13586/800x600_nikolaus-konzert-2019-3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13587/nikolaus-konzert-2019-38.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13587/800x600_nikolaus-konzert-2019-38.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13588/nikolaus-konzert-2019-75.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13588/800x600_nikolaus-konzert-2019-75.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13589/nikolaus-konzert-2019-119.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13589/800x600_nikolaus-konzert-2019-119.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13590/nikolaus-konzert-2019-153.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13590/800x600_nikolaus-konzert-2019-153.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13591/nikolaus-konzert-2019-157.jpg" rel="pre',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Koncert Mikołajkowy Akademii Muzycznej WBS',
    '',
    'https://wbs.pl/koncert_mikolajkowy_akademii_muzycznej_wbs-3474.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-129',
    'szkola-w-malawi-dziekuje-za-pomoc-3452',
    'Szkoła w Malawi dziękuje za pomoc',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13432/800x600_www.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				20.11 obchodzimy Międzynarodowy Dzień Praw Dziecka. Jednym z praw, jakie mają dzieci jest prawo do edukacji. Zapewnienie dostępu do niej jest niezwykle ważnym celem, jednak w wielu miejscach na Ziemi, z r&oacute;żnych przyczyn, dzieci nie mają możliwości pełnego uczestniczenia w procesie nauczania.<br />
Już kolejny rok będziemy zbierać w naszej szkole datki, kt&oacute;re zostaną przeznaczone na poprawę warunk&oacute;w nauki dzieci w Malawi.<br />
Zebrane w naszym Campusie fundusze zostały przekazane na budowę nowego budynku szkolnego i ławki.<br />
Dziękujemy serdecznie za pomoc przy projektach i wciąż liczymy na Państwa wsparcie.<br />
Zdjęcia pokazują, że wsp&oacute;lnie możemy zrobić naprawdę dużo!<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13436/j_(2).jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13436/800x600_j_(2).jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13437/lb.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13437/800x600_lb.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13438/mb.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13438/800x600_mb.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13439/la.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13439/800x600_la.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13440/n_(1).jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13440/800x600_n_(1).jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13441/n_(2).jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13441/800x600_n_(2).jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13442/n_(3).jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13442/800x600_n_(3).jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Szkoła w Malawi dziękuje za pomoc',
    '',
    'https://wbs.pl/szkola_w_malawi_dziekuje_za_pomoc-3452.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-130',
    'dzien-taty-w-wbs-4011',
    'Dzień Taty w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15993/800x600_clipboard06.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Życzymy wszystkiego najlepszego z okazji Dnia Taty!<br />
<br />
Na zdjęciach laurki dzieci z klasy 2c.<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15994/clipboard01.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15994/800x600_clipboard01.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15995/clipboard02.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15995/800x600_clipboard02.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15996/clipboard03.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15996/800x600_clipboard03.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15997/clipboard04.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15997/800x600_clipboard04.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15998/clipboard05.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15998/800x600_clipboard05.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15999/clipboard07.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15999/800x600_clipboard07.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16000/clipboard08.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16000/800x600_clipboard08.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16001/img_20210623_094231.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16001/800x600_img_20210623_094231.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dzień Taty w WBS',
    '',
    'https://wbs.pl/dzien_taty_w_wbs-4011.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-131',
    'wyroznienie-dla-pani-dyrektor-mechthild-hinsbergerboguski-i-pana-norberta-st-we-3873',
    'Wyróżnienie dla Pani Dyrektor Mechthild Hinsberger-Boguski i Pana Norberta Stüwe',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15358/800x600_www.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Z okazji 50. rocznicy uklęknięcia Willy''ego Brandta pod Pomnikiem Bohater&oacute;w Getta w Warszawie Ambasada Niemiec uhonorowała 50 os&oacute;b, kt&oacute;re ich zdaniem mocno angażowały się w pojednanie polsko-niemieckie i związane z nim projekty.  <br />
<br />
Do grona tych os&oacute;b należą Dyrektor Polsko - Niemieckiej Szkoły Spotkań i Dialogu im. Willy'' ego Brandta Pani <strong>Mechthild Hinsberger - Boguski</strong>, wyr&oacute;żniona za wspieranie dialogu polsko - niemieckiego oraz nasz nauczyciel historii Pan <strong>Norbert St&uuml;we</strong>, kt&oacute;rzy od lat organizuje w WBS projekty historyczne rozbudzające w naszych uczniach zamiłowanie do historii. <br />
<br />
Na zdjęciu osobisty list od Ambasadora Niemiec w Polsce dr Arndta Freytaga von Loringhovena oraz zestaw monet związanych z historycznym wydarzeniem z 7 grudnia 1970 roku.<br />
<br />
Serdecznie gratulujemy wyr&oacute;żnienia!<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15354/img_7275.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15354/800x600_img_7275.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15355/img_7274.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15355/800x600_img_7274.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15356/m.boguski.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15356/800x600_m.boguski.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15357/img_0045.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15357/800x600_img_0045.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wyróżnienie dla Pani Dyrektor Mechthild Hinsberger-Boguski i Pana Norberta Stüwe',
    '',
    'https://wbs.pl/wyroznienie_dla_pani_dyrektor_mechthild_hinsbergerboguski_i_pana_norberta_st_we-3873.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-132',
    'pochod-swmarcina-3438',
    'Pochód Św.Marcina',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13404/800x600_st_martin19-2521.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				14 listopada wsp&oacute;lnie z Niemieckim Przedszkolem obchodziliśmy dzień Św. Marcina.<br />
Rozpoczęliśmy o 17:00 w budynku naszej szkoły przedstawieniem w wykonaniu przedszkolak&oacute;w i uczni&oacute;w 2 klasy.<br />
Po przedstawieniu udaliśmy się na poch&oacute;d św. Marcina, kt&oacute;remu towarzyszył sam św. Marcin na koniu i blask wykonanych przez dzieci lampion&oacute;w rozświetlających ten listopadowy wiecz&oacute;r.<br />
Po pochodzie udaliśmy się na poczęstunek (słodkie wypieki i napoje) do auli szkoły.<br />
Środki z uzyskanej sprzedaży wypiek&oacute;w zostaną przekazane na cele charytatywne. <br />
Dziękujemy firmie Interuropol za słodkie wypieki.<br />
<br />
Zapraszamy do obejrzenia fotorelacji!<br />
<br />
Zdjęcia : Marek Kępiński<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13405/st_martin19-2465.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13405/800x600_st_martin19-2465.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13406/st_martin19-2402.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13406/800x600_st_martin19-2402.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13407/st_martin19-2579.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13407/800x600_st_martin19-2579.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13408/st_martin19-3088.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13408/800x600_st_martin19-3088.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13416/st_martin19-2659.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13416/800x600_st_martin19-2659.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13417/st_martin19-2700.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13417/800x600_st_martin19-2700.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Pochód Św.Marcina',
    '',
    'https://wbs.pl/pochod_swmarcina-3438.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-133',
    'homeschooling-homeoffice-5-rad-jak-przetrwac-domowa-kwarantanne-3580',
    'Homeschooling, Homeoffice. 5 rad, jak przetrwać domową kwarantannę.',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14089/800x600_www2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Kilka dni temu,&nbsp;z powodu zamknięcia szk&oacute;ł nasze życie zostało wywr&oacute;cone do g&oacute;ry nogami .<br />
<br />
Rodzice pracują w zdalnie, dzieci i młodzież opracowują materiał z pomocą nauczycieli, kt&oacute;rzy r&oacute;wnież przenieśli swą pracę do domu.<br />
<br />
Nikt nie wie, jak długo potrwa ta sytuacja. Ale jedna rzecz jest pewna: musimy przyjmować r&oacute;żne strategie, kt&oacute;re pozwolą przystosować się do tej nowej dla nas wszystkich sytuacji.<br />
<br />
Poniżej 5 ważnych wskaz&oacute;wek, kt&oacute;re ułatwią funkcjonowanie w nowym, codziennym życiu. <br />
<br />
<div><img src="/pub/uploader/images/infografika_3.png" alt="infografika_3.png" width="449" height="1123" /></div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Homeschooling, Homeoffice. 5 rad, jak przetrwać domową kwarantannę.',
    '',
    'https://wbs.pl/homeschooling_homeoffice_5_rad_jak_przetrwac_domowa_kwarantanne-3580.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-134',
    'jugend-musiziert-nagrania-do-etapu-krajowego-3903',
    'Jugend musiziert - Nagrania do etapu krajowego',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15440/800x600_21-03_jumu-etap-ii-103-07694.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				4 marca 2021 w auli naszej szkoły odbyły się nagrania do konkursu etapu krajowego <strong>Jugend musiziert Kopenhaga 2021</strong>. <br />
16 uczestniczek i uczestnik&oacute;w z sukcesem nagrało swoje programy muzyczne. <br />
Nasi młodzi muzycy brali udział w następujących kategoriach: śpiew, gra na fortepianie, instrumentach perkusyjnych, gitarze i saksofonie. <br />
Tegoroczny etap krajowy konkursu Jugend musiziert odbędzie się w formie online w dniach 17-19 marca. <br />
<br />
Trzymamy kciuki i życzymy sukces&oacute;w!<br />
<br />
Marcin Lemiszewski<br />
<br />
Przewodniczący etapu regionalnego Jugend musiziert w Warszawie<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15441/21-03_jumu-etap-ii-174-07805.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15441/800x600_21-03_jumu-etap-ii-174-07805.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15442/21-03_jumu-etap-ii-325-07981.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15442/800x600_21-03_jumu-etap-ii-325-07981.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15443/21-03_jumu-etap-ii-400-08069.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15443/800x600_21-03_jumu-etap-ii-400-08069.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15445/21-03_jumu-etap-ii-529.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15445/800x600_21-03_jumu-etap-ii-529.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15447/21-03_jumu-etap-ii-638.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15447/800x600_21-03_jumu-etap-ii-638.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15448/21-03_jumu-etap-ii-702.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15448/800x600_21-03_jumu-etap-ii-702.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15449/21-03_jumu-etap-ii-782.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15449/800x600_21-03_jumu-etap-ii-782.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15450/21-03_jumu-etap-ii-892.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15450/800x600_21-03_jumu-etap-ii-892.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15451/21-03_jumu-etap-ii-1015.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15451/800x600_21-03_jumu-etap-ii-1015.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15452/21-03_jumu-etap-ii-1026.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15452/800x600_21-03_jumu-etap-ii-1026.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15453/21-03_jumu-etap-ii-1015.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15453/800x600_21-03_jumu-etap-ii-1015.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15454/21-03_jumu-etap-ii-1056.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15454/800x600_21-03_jumu-etap-ii-1056.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15456/21-03_jumu-etap-ii-1139.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15456/800x600_21-03_jumu-etap-ii-1139.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15457/21-03_jumu-etap-ii-1211.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15457/800x600_21-03_jumu-etap-ii-1211.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15458/21-03_jumu-etap-ii-1235.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15458/800x600_21-03_jumu-etap-ii-1235.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15459/21-03_jumu-etap-ii-1285.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15459/800x600_21-03_jumu-etap-ii-1285.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15481/21-03_jumu-etap-ii-647.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15481/800x600_21-03_jumu-etap-ii-647.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Jugend musiziert - Nagrania do etapu krajowego',
    '',
    'https://wbs.pl/jugend_musiziert__nagrania_do_etapu_krajowego_-3903.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-135',
    'mediatorzy-na-podworku-szkolnym-3383',
    'Mediatorzy na podwórku szkolnym',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13205/800x600_dsc00121.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Już jesteśmy!<br />
My, szkolni mediatorzy Adam, Hania, Joachim, Maks, Max, Robert i Alex cieszymy się, że możemy wam pomagać w rozstrzyganiu spor&oacute;w na szkolnym podw&oacute;rku.<br />
Rozpoznacie nas po ż&oacute;łtych kamizelkach ostrzegawczych. <br />
Zwracajcie się do nas jesli potrzebujecie pomocy.<br />
Naszymi opiekunami są pan Pommerening, przez ktorego zostaliśmy przeszkoleni oraz praktykanci - Peter i Philipp.<br />
<br />
<br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Mediatorzy na podwórku szkolnym',
    '',
    'https://wbs.pl/mediatorzy_na_podworku_szkolnym-3383.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-136',
    'gymnastikshowvideo-3535',
    'Gymnastikshow-video',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14011/800x600_gymnastikshow-20-295.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: center;"><iframe src="https://www.youtube.com/embed/Tx7duZ7-s3s" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe></div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Gymnastikshow-video',
    '',
    'https://wbs.pl/gymnastikshowvideo-3535.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-137',
    'zajecia-z-mapa-3791',
    'Zajęcia z mapą',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14861/800x600_kartografia.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Czy 13 to pechowa liczba ? W pewnych warunkach pogodowych- tak:) <br />
Zaczęliśmy od zapoznania się z mapami, obliczenia  kąt&oacute;w, znajomości z obsługi kompasu.<br />
Wszystko w teorii było proste, ale jak trzeba było samemu trafić do celu, to już takie łatwe nie było.<br />
Troszkę błądziliśmy, ale nikt się nie zgubił. <br />
Po szaleństwach leśnych był  czas na grill i jazdę na konikach.<br />
Bycie w lesie bez maseczek to duża frajda !<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14910/_dsc0905.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14910/800x600__dsc0905.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14911/_dsc0907.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14911/800x600__dsc0907.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14912/_dsc0908.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14912/800x600__dsc0908.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14913/_dsc0909.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14913/800x600__dsc0909.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14914/_dsc0910.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14914/800x600__dsc0910.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14915/_dsc0911.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14915/800x600__dsc0911.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14916/_dsc0912_hp.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14916/800x600__dsc0912_hp.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14917/_dsc0913.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14917/800x600__dsc0913.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14918/_dsc0914.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14918/800x600__dsc0914.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14919/_dsc0917_hp.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14919/800x600__dsc0917_hp.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14920/_dsc0918_hp.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14920/800x600__dsc0918_hp.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14921/_dsc0919.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14921/800x600__dsc0919.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14922/_dsc0920.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14922/800x600__dsc0920.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14923/_dsc0921.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14923/800x600__dsc0921.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14924/_dsc0922.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14924/800x600__dsc0922.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Zajęcia z mapą',
    '',
    'https://wbs.pl/zajecia_z_mapa-3791.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-138',
    'koty-z-promyka-pomagamy-i-uczymy-sie-z-sercem-5209',
    '🐾 „Koty z Promyka” – pomagamy i uczymy się z sercem',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/26498/800x600_image00030.jpeg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				24 stycznia odbyło się uroczyste przekazanie darowizny do schroniska &bdquo;Promyk&rdquo; w ramach akcji &bdquo;Koty z Promyka&rdquo;. W przedsięwzięciu wzięły udział klasy 2a i 2c oraz świetlica szkolna.<br />
<br />
Koty ze schroniska stały się wyjątkowymi &bdquo;modelami&rdquo; podczas lekcji &ndash; uczniowie na ich podstawie uczyli się pisać charakterystykę postaci. Nauka połączona z empatią i wrażliwością na potrzeby zwierząt okazała się wspaniałą lekcją nie tylko języka, ale i serca.<br />
<br />
R&oacute;wnolegle świetlica szkolna zorganizowała sprzedaż oraz zbi&oacute;rkę datk&oacute;w na rzecz schroniska. Dzięki ogromnemu zaangażowaniu uczni&oacute;w, rodzic&oacute;w i nauczycieli udało się zebrać aż 2415 zł!<br />
<br />
Dziękujemy wszystkim za wsparcie, otwarte serca i wsp&oacute;lne działanie na rzecz potrzebujących zwierząt. <br />
Razem możemy więcej! 🐱💛
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/26490/image00002.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26490/800x600_image00002.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26491/image00007.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26491/800x600_image00007.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26492/image00008.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26492/800x600_image00008.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26493/image00010.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26493/800x600_image00010.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26494/image00018.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26494/800x600_image00018.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26495/image00021.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26495/800x600_image00021.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26496/image00023.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26496/800x600_image00023.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26497/image00028.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26497/800x600_image00028.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26499/image00033.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26499/800x600_image00033.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26500/image00034.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26500/800x600_image00034.jpeg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    '🐾 „Koty z Promyka” – pomagamy i uczymy się z sercem',
    '',
    'https://wbs.pl/___koty_z_promyka____pomagamy_i_uczymy_sie_z_sercem-5209.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-139',
    'koronawirus-iii-etap-znoszenia-ograniczen-3655',
    'Koronawirus. III etap znoszenia ograniczeń.',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14326/800x600_3etap2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice,<br />
<br />
po konferencji prasowej premiera M. Morawieckiego i ministra zdrowia Ł. Szumowskiego dotyczącej dalszych działań w związku z pandemią koronawirusa  z dnia 13.05 przedstawiamy najważniejsze punkty:<br />
<br />
Już <strong>od 18 maja</strong> będziemy mogli skorzystać z usług fryzjera i kosmetyczki, a także p&oacute;jść do restauracji i kawiarni. Zwiększony zostanie r&oacute;wnież limit pasażer&oacute;w w transporcie publicznym.<br />
<strong>Od 18 maja:</strong><br />
o    Będą mogły działać zakłady fryzjerskie i kosmetyczne<br />
o    Będą mogły działać restauracje, kawiarnie i bary<br />
o    Wzrośnie limit pasażer&oacute;w w środkach transportu publicznego: <br />
o    Będą mogły zostać otwarte pełnowymiarowe boiska piłkarskie (maksymalnie 22 osoby (+ 4 trener&oacute;w))<br />
o    Wraca możliwość uprawiania sportu na otwartej infrastrukturze oraz obiektach sportowych:<br />
&bull;	stadionach, <br />
&bull;	boiskach, <br />
&bull;	skoczniach, <br />
&bull;	torach,<br />
&bull;	orlikach.<br />
&bull;	hale i sale sportowe<br />
<br />
Mogą być prowadzone indywidualne zajęcia rewalidacyjno-wychowawcze. <br />
W świecie kultury możliwa będzie m.in.:<br />
&bull;	działalność kin plenerowych, w tym samochodowych,<br />
&bull;	wznowienie pracy na planach filmowych,<br />
&bull;	wznowienie nagrań fonograficznych i audiowizualnych w instytucjach kultury,<br />
&bull;	wznowienie pr&oacute;b i ćwiczeń, <br />
&bull;	indywidualne zajęcia na uczelniach artystycznych. <br />
<strong>Od 25 maja:</strong><br />
&bull;	    Będzie można prowadzić zajęcia opiekuńczo-wychowawcze w klasach 1-3 szkoły podstawowej,<br />
&bull;	    Będzie można prowadzić konsultację z nauczycielami w szkołach dla maturzyst&oacute;w i uczni&oacute;w 8 klas przede wszystkim z przedmiot&oacute;w zdawanych na egzaminach. <br />
<br />
Szczeg&oacute;ły na stronie: https://www.gov.pl/web/premier/rzad-oglosil-trzeci-etap-lagodzenia-obostrzen<br />
<br />
Będziemy Państwa informować na bieżąco kolejnych podjętych krokach.<br />
<br />
Życzymy dużo zdrowia!<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Koronawirus. III etap znoszenia ograniczeń.',
    '',
    'https://wbs.pl/koronawirus_iii_etap_znoszenia_ograniczen-3655.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-140',
    'podziekowania-od-rotary-polska-3411',
    'Podziękowania od Rotary Polska',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13374/800x600_rotary_www2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Cieszymy się, że możemy Państwa poinformować, iż bieg sponsorowany w naszej szkole jest najważniejszym wydarzeniem na stronie Rotary Polska. Nasze uczennice i uczniowie &quot;wybiegali&quot; najwyższą w Polsce darowiznę w walce z polio, a tegoroczny sponsorowany bieg zwiększył tę kwotę <u>aż o jedną trzecią</u>.<br />
Z tej okazji chcielibyśmy przekazać podziękowania od Rotary Polska za zaangażowanie wszystkich w ten bieg.<br />
<br />
Z wielką radością możemy już ogłosić, że zebraliśmy <strong>41 500 PLN </strong>na walkę z polio!!!<br />
<br />
Dziękujemy!<br />
<br />
Link: <a href="https://rotary.org.pl/bieg-przeciw-polio/">https://rotary.org.pl/bieg-przeciw-polio/</a><br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Podziękowania od Rotary Polska',
    '',
    'https://wbs.pl/podziekowania_od_rotary_polska-3411.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-141',
    'nasz-nauczyciel-muzyki-i-dyrektor-akademii-muzycznej-wbs-marcin-lemiszewski-w-telewizyjnych-lekcjach-muzyki-3652',
    'Nasz nauczyciel muzyki i dyrektor Akademii Muzycznej WBS Marcin Lemiszewski w  telewizyjnych lekcjach muzyki',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14335/800x600_11.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Czy słyszeliście już o Panu od Muzyki  TVP, kt&oacute;ry swą pasją do muzyki  zaraża nie tylko dzieci uczące się teraz w domach, ale r&oacute;wnież dorosłych? Jeśli nie , zapraszamy do obejrzenia emitowanych przez TVP1 w ramach cyklu <strong>&bdquo;Szkoła Podstawowa  z TVP</strong>&rdquo; lekcji muzyki prowadzonych przez dyrektora Akademii Muzycznej WBS  i naszego nauczyciela muzyki Pana <strong>Marcina Lemiszewskiego.</strong><br />
Dowiecie się z nich czego składa się muzyka i co to jest body percussion. Poznacie wiele egzotycznych instrument&oacute;w, jak darbuka czy bęben &bdquo;morze&rdquo;, jak r&oacute;wnież  posłuchacie muzyki klasycznej granej na ksylofonie i nauczycie się prawidłowo grać na klawesach. Udacie się w podr&oacute;ż muzyczną do Wiednia, gdzie poznacie ciekawostki z życia genialnego  Wolfganga Amadeusza Mozarta. <br />
Już dziś, w rytmie muzyki latynoamerykańskiej zapraszamy na kolejne odcinki lekcji muzyki z Panem Marcinem Lemiszewskim. <br />
<br />
Polecamy r&oacute;wnież dotychczas wyemitowane odcinki:<br />
<br />
<a href="https://vod.tvp.pl/video/szkola-z-tvp-klasa-6,muzyka-lekcja-1-02042020,47345761">https://vod.tvp.pl/video/szkola-z-tvp-klasa-6,muzyka-lekcja-1-02042020,47345761</a><br />
<a href="https://vod.tvp.pl/video/szkola-z-tvp-klasa-6,muzyka-lekcja-1-2304202,47569148">https://vod.tvp.pl/video/szkola-z-tvp-klasa-6,muzyka-lekcja-1-2304202,47569148</a><br />
<a href="https://vod.tvp.pl/video/szkola-z-tvp-klasa-6,30042020-lekcja-1-muzyka,47660047">https://vod.tvp.pl/video/szkola-z-tvp-klasa-6,30042020-lekcja-1-muzyka,47660047</a><br />
<a href="https://vod.tvp.pl/video/szkola-z-tvp-klasa-6,muzyka-lekcja-1-21052020,47832782">https://vod.tvp.pl/video/szkola-z-tvp-klasa-6,muzyka-lekcja-1-21052020,47832782</a><br />
<a href="https://vod.tvp.pl/video/szkola-z-tvp-klasa-6,muzyka-lekcja-1-28052020,47937800">https://vod.tvp.pl/video/szkola-z-tvp-klasa-6,muzyka-lekcja-1-28052020,47937800</a><br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14323/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14323/800x600_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14336/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14336/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14337/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14337/800x600_3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14338/5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14338/800x600_5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14339/6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14339/800x600_6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14340/7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14340/800x600_7.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14341/9.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14341/800x600_9.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nasz nauczyciel muzyki i dyrektor Akademii Muzycznej WBS Marcin Lemiszewski w  telewizyjnych lekcjach muzyki',
    '',
    'https://wbs.pl/nasz_nauczyciel_muzyki_i_dyrektor_akademii_muzycznej_wbs_marcin_lemiszewski_w__telewizyjnych_lekcjach_muzyki-3652.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-142',
    'odwolanie-wydarzeniajugend-musiziertlandeswettbewerb-warschau-2020-3554',
    'ODWOŁANIE WYDARZENIA-Jugend musiziert-Landeswettbewerb Warschau 2020',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14045/800x600_wwwpl.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Państwo, <br />
z uwagi na rozpowszechnianie&nbsp; się koronawirusa COVID-19 i potwierdzeniem kolejnych zachorowań w Polsce, zesp&oacute;ł kryzysowy powołany w naszej szkole, z udziałem dyrekcji Szkoły, zarządu Niemieckiego Towarzystwa Szkolnego oraz koordynatora muzyki i kierownika projektu JuMu 2020 podjął decyzję o odwołaniu muzycznego wydarzenia &quot;Jugend musiziert&quot; Warschau 2020 w dniach 18 - 23 marca 2020 roku.<br />
<br />
Decyzja zapadła w związku z ryzykiem, jakim m&oacute;głby być kontakt z osobami z kraj&oacute;w, w kt&oacute;rych rośnie liczba zachorowań, jak r&oacute;wnież&nbsp; z uwagi na fakt, iż wszyscy uczestnicy podr&oacute;żowaliby samolotami z kilkunastu lotnisk w Europie.<br />
<br />
Była to dla nas bardzo trudna decyzja, biorąc pod uwagę, jak ważnym i prestiżowym wydarzeniem gł&oacute;wnie dla młodych muzyk&oacute;w jest międzynarodowy konkurs &bdquo;Jugend musiziert&rdquo;.<br />
Priorytetem jednak dla nas jest zdrowie i bezpieczeństwo wszystkich zaangażowanych os&oacute;b, tj. uczestnik&oacute;w i zaproszonych gości, dzieci, młodzieży oraz pracownik&oacute;w Szkoły im. Willy&rsquo;ego Brandta oraz ich rodzin. <br />
<br />
Liczymy na Państwa wyrozumiałość i wierzymy, że uda nam się wkr&oacute;tce spotkać przy okazji innych wydarzeń.<br />
<br />
Dyrekcja Polsko-Niemieckiej Szkoły Spotkań i Dialogu im. Willy''ego Brandta w Warszawie <br />
Zarząd Niemieckiego Towarzystwa Szkolnego w Warszawie<br />
<br />
<br />
<br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'ODWOŁANIE WYDARZENIA-Jugend musiziert-Landeswettbewerb Warschau 2020',
    '',
    'https://wbs.pl/odwolanie_wydarzeniajugend_musiziertlandeswettbewerb_warschau_2020-3554.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-143',
    'spotkanie-z-pisarzem-mikolajem-golachowskim-3337',
    'Spotkanie z pisarzem Mikołajem Golachowskim',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/12977/800x600_img_2490.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				We wtorek 17 września klasy 3C, 4C, 5C razem z opiekunami odwiedziły księgarnię Badet, gdzie spotkały się z przyrodnikiem, podr&oacute;żnikiem, polarnikiem i pisarzem Mikołajem Golachowskim. Uczniowie mieli okazję posłuchać opowieści o fascynującym życiu zwierząt, ich zadkach, ogonkach i kuperkach oraz dowiedzieć się, czym zajmuje się badacz na stacji polarnej na Antarktydzie. Na koniec, wykorzystując r&oacute;żne materiały, dzieci zaprojektowały swoją maskę. Po zajęciach można było kupić książkę autora i zdobyć autograf. <br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/12978/img_2482a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12978/800x600_img_2482a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12979/img_2480a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12979/800x600_img_2480a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12980/img_2481a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12980/800x600_img_2481a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12981/img_2483.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12981/800x600_img_2483.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12982/img_2486a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12982/800x600_img_2486a.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Spotkanie z pisarzem Mikołajem Golachowskim',
    '',
    'https://wbs.pl/spotkanie_z_pisarzem_mikolajem_golachowskim-3337.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-144',
    'wycieczka-do-kampinosu-kl-4a-4c-i-6c-3735',
    'Wycieczka do Kampinosu kl. 4a, 4c i 6c',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14728/800x600__dsc0882.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Klasy 4a i 4c wybrały się na wspaniałą wycieczkę do Parku Kampinoskiego. Przy jeszcze letnich temperaturach pan leśniczy oprowadzał nas i opowiadał o r&oacute;żnorodności drzew w parku, o tym jak rozpoznać je po liściach i owocach oraz jak określić ich wiek. Pozwoliło nam to dokonać bardzo ciekawych odkryć. Poza nimi znaleźliśmy bardzo dużo muchomor&oacute;w i borowik&oacute;w. Naszą wycieczkę zakończyliśmy&nbsp; ogniskiem, przy kt&oacute;rym smażyliśmy kiełbaski. Nie zabrakło oczywiście pianek:).<br />
<br />
Gabriela Greipel<br />
<br />
Nasza dzisiejsza podr&oacute;ż rozpoczęła się ścieżką dydaktyczną po Puszczy Kampinoskiej.<br />
Tu zdobywaliśmy naklejki-nagrody za prawidłowe i szybkie odpowiedzi.<br />
Następnie pojechaliśmy do Dworu Strzyżew, by poznać obowiązki pani Ochmistrzyni.<br />
W sadzie zbieraliśmy śliwki, podziwialiśmy czasznicę olbrzymią (grzyb-pod ochroną), piekliśmy drożdżowe buły i smażyliśmy dżemik śliwkowy.<br />
Był też czas na zabawę i skoki przez przeszkody.<br />
A pogoda była cudowna....<br />
<br />
Beata Kosmalska-Reda<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14729/_dsc0871.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14729/800x600__dsc0871.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14730/_dsc0872.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14730/800x600__dsc0872.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14731/_dsc0875.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14731/800x600__dsc0875.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14732/_dsc0877.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14732/800x600__dsc0877.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14733/_dsc0876.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14733/800x600__dsc0876.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14734/_dsc0884.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14734/800x600__dsc0884.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14735/_dsc0887.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14735/800x600__dsc0887.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14736/_dsc0890.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14736/800x600__dsc0890.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14737/_dsc0893.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14737/800x600__dsc0893.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14738/_dsc0894.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14738/800x600__dsc0894.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14739/_dsc0903.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14739/800x600__dsc0903.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14740/_dsc0904.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14740/800x600__dsc0904.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Wycieczka do Kampinosu kl. 4a, 4c i 6c',
    '',
    'https://wbs.pl/wycieczka_do_kampinosu_kl_4a_4c_i_6c-3735.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-145',
    'pierwsze-miejsce-na-wilanowie-komplet-zwyciestw-i-awans-do-finalow-warszawskich-5182',
    'Pierwsze miejsce na Wilanowie – komplet zwycięstw i awans do finałów warszawskich',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/25887/800x600_1.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Dw&oacute;ch naszych zawodnik&oacute;w w rozgrywkach tenisa stołowego zajęło pierwsze miejsce na Wilanowie, wygrywając wszystkie 8 mecz&oacute;w i pozostając niepokonanymi przez cały etap rywalizacji. Świetna forma, konsekwentna gra oraz bardzo dobra wsp&oacute;łpraca przy stole pozwoliły im wywalczyć awans do finał&oacute;w warszawskich, gdzie zmierzą się z najlepszymi zawodnikami stolicy.<br />
<br />
To duży sukces i potwierdzenie ich wysokiego poziomu sportowego oraz ciężkiej pracy.
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/25888/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25888/800x600_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/25889/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/25889/800x600_3.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Pierwsze miejsce na Wilanowie – komplet zwycięstw i awans do finałów warszawskich',
    '',
    'https://wbs.pl/pierwsze_miejsce_na_wilanowie___komplet_zwyciestw_i_awans_do_finalow_warszawskich-5182.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-146',
    'nasi-uczniowie-jurorami-w-25-mlodziezowym-festiwalu-filmowym-schlingel-3770',
    'Nasi uczniowie jurorami w 25. Młodzieżowym Festiwalu Filmowym "Schlingel"',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14823/800x600_dsc03697.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Uczniowie klasy 6a, 6c, 7a i 7c z wyprzedzeniem obejrzeli i ocenili online filmy 25. Młodzieżowego Festiwalu Filmowego &quot;Schlingel&quot;.<br />
Ze względu na wyjątkowe okoliczności nie mogli niestety wybrać się na festiwal osobiście jako jurorzy, ale przez kilka dni oglądali codziennie dwa filmy, do kt&oacute;rych pisali recenzje i przyznawali punkty.<br />
Chcielibyśmy podziękować dyrekcji europejskiego jury dziecięcego pani M&uuml;ller, dyrekcji szkoły i panu Pommereningowi za organizację i realizację tego ekscytującego projektu!<br />
Festiwal odbywa się online w dniach 10 - 17.10.2020. <br />
Link do festiwalu: www.ff-schlingel.de<br />
<br />
W drugiej godzinie, dokładnie  od 2:16 nasi uczniowie prezentują sw&oacute;j werdykt.<br />
<br />
<br />
<iframe src="https://www.youtube.com/embed/aqr3169LV1o" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nasi uczniowie jurorami w 25. Młodzieżowym Festiwalu Filmowym "Schlingel"',
    '',
    'https://wbs.pl/nasi_uczniowie_jurorami_w_25_mlodziezowym_festiwalu_filmowym_schlingel-3770.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-147',
    'wytyczne-dotyczace-nauczania-stacjonarnego-i-zdalnego-w-wbs-3722',
    'Wytyczne dotyczące nauczania stacjonarnego i zdalnego w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14669/800x600_img_20200520_173103_neu.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Wytyczne stan na 15.09.2020
				</td>
				<td>
					<a href="pub/cms/files/1368/wytyczne_dotyczace_nauczania_stacjonarnego_i_zdalnego_w_wbs_15.09.2020.pdf" title="Wytyczne stan na 15.09.2020" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wytyczne dotyczące nauczania stacjonarnego i zdalnego w WBS',
    '',
    'https://wbs.pl/wytyczne_dotyczace_nauczania_stacjonarnego_i_zdalnego_w_wbs-3722.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-148',
    'mlodziez-z-wbs-we-francji-w-ramach-programu-erasmus-plus-3456',
    'Młodzież z WBS we Francji w ramach programu Erasmus plus',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13443/800x600_img_2972.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Młodzież z WBS aktywnie rozpoczęła pobyt we Francji w ramach programu Erasmus plus. Przed nami liczne warsztaty na temat integracji i migracji w Europie, praca w międzynarodowych zespołach, wycieczka w g&oacute;ry i inne niespodzianki przygotowane przez naszych francuskich partner&oacute;w. Będziemy was o wszystkim na bieżąco informować.<br />
<br />
<strong>Poniedzialek </strong>rozpoczęliśmy spotkaniem z rodzinami goszczącym, spacer po starym,  urokliwym miasteczku Tarbes i sportowe aktywności w szkole L''Ensemble Scolaire Pradeau-La S&egrave;de &agrave; Tarbes towarzyszyły pierwszym dniom pobytu uczni&oacute;w WBS we Francji.<br />
<br />
We <strong>wtorek </strong>młodzież  z WBS spotkała się z imigrantami ze Sri Lanki i Grecji, kt&oacute;rzy opowiedzieli o swoich doświadczeniach związanych z emigracją do Francji. Spotkanie było  też okazją do wysłuchania wzruszających opowieści o ludziach, kt&oacute;rzy na przek&oacute;r przeciwnościom losu starają się zawalczyć o swoje szczęście<br />
<br />
<strong>Środa</strong> minęła uczestnikom projektu na tworzeniu komiks&oacute;w oraz gier planszowych, w kt&oacute;rych zostały poruszone tematy dotyczące losu imigrant&oacute;w . Młodzież wyeksponowała sytuacje świadczące o dyskryminacji i codziennych trudnościach, kt&oacute;re stają się udziałem ludzi opuszczających na zawsze  sw&oacute;j kraj ze względ&oacute;w politycznych czy ekonomicznych. <br />
<br />
<strong>Czwartek</strong> był okazją do międzykulturowej integracji, kt&oacute;ra odbyła się w pięknej zimowej aurze u podn&oacute;ża Pirenej&oacute;w.<br />
<br />
W <strong>piątek </strong>młodzież pracowała nad przygotowaniem wystawy podsumowującej pracę warsztatową. &bdquo;Żaden człowiek nie jest nielegalny&rdquo;, &bdquo;Problemem nie jest imigracja, problemem jest edukacja&rdquo;, &bdquo;Czuję się sam, chociaż otoczony ludźmi&rdquo; - to tylko niekt&oacute;re z haseł wypowiadanych przez znanych emigrant&oacute;w na temat  emigracji. kt&oacute;re stały się  &rdquo;budulcem&rdquo; instalacji wykonanej wsp&oacute;lnie przez wszystkich uczestnik&oacute;w programu. <br />
Na wystawie pojawiły się też opracowane graficznie refleksje na temat spotkań z uchodźcami oraz komiksy zawierające gorzką prawdę dotyczącą dyskryminacji imigrant&oacute;w. <br />
<br />
Dzięki naszym francuskim gospodarzom, zar&oacute;wno uczniowie, jak i towarzyszący im nauczyciele spędzili pracowity, tw&oacute;rczy, ale też pełen serdeczności tydzień w Tarbes. Następny etap programu odbędzie się w stolicy Łotwy - Rydze na przełomie marca i kwietnia 2020roku. <br />
<br />
Zapraszamy do obejrzenia zdjęć. <br />
<div style="text-align: center;"><img src="/pub/uploader/images/erasmus.jpg" alt="erasmus.jpg" width="305" height="167" /></div>
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13444/img_2998.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13444/800x600_img_2998.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13445/img_3001.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13445/800x600_img_3001.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13446/img_3004.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13446/800x600_img_3004.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13447/img_3008.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13447/800x600_img_3008.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13448/img_3018.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13448/800x600_img_3018.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13449/img_3073.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13449/800x600_img_3073.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13450/img_3074.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13450/800x600_img_3074.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13489/img_3127.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13489/800x600_img_3127.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13490/img_3124.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13490/800x600_img_3124.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13491/img_3123.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/1',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Młodzież z WBS we Francji w ramach programu Erasmus plus',
    '',
    'https://wbs.pl/mlodziez_z_wbs_we_francji_w_ramach_programu_erasmus_plus-3456.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-149',
    'miedzynarodowy-dzien-kropki-2817',
    'Międzynarodowy Dzień Kropki',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/9740/800x600_punktetag-435.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				Zdjęcia Marek Kępiński<br />
			</p>
		</div>


		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/9741/punktetag-7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9741/800x600_punktetag-7.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9742/punktetag-14.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9742/800x600_punktetag-14.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9743/punktetag-25.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9743/800x600_punktetag-25.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9744/punktetag-53.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9744/800x600_punktetag-53.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9745/punktetag-57.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9745/800x600_punktetag-57.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9746/punktetag-74.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9746/800x600_punktetag-74.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9747/punktetag-75.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9747/800x600_punktetag-75.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9748/punktetag-85.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9748/800x600_punktetag-85.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9749/punktetag-98.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9749/800x600_punktetag-98.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9750/punktetag-123.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9750/800x600_punktetag-123.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9751/punktetag-139.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9751/800x600_punktetag-139.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9752/punktetag-158.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9752/800x600_punktetag-158.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9753/punktetag-177.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9753/800x600_punktetag-177.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9754/punktetag-194.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9754/800x600_punktetag-194.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9755/punktetag-232.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9755/800x600_punktetag-232.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9756/punktetag-242.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9756/800x600_punktetag-242.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9757/punktetag-251.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9757/800x600_punktetag-251.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9758/punktetag-253.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9758/800x600_punktetag-253.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9759/punktetag-254.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9759/800x600_punktetag-254.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9760/punktetag-262.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9760/800x600_punktetag-262.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9761/punktetag-271.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9761/800x600_punktetag-271.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9762/punktetag-289.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9762/800x600_punktetag-289.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9763/punktetag-290.jpg" rel="pretty',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Międzynarodowy Dzień Kropki',
    '',
    'https://wbs.pl/miedzynarodowy_dzien_kropki-2817.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-150',
    'sportowa-jesien-w-wbs-3389',
    'Sportowa jesień w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13304/800x600_img_0419.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: left;">To był naprawdę aktywny początek roku szkolnego dla uczni&oacute;w naszej szkoły.</div>
<br />
<strong>19.09</strong> odbył się w naszej szkole <a href="https://wbs.pl/bieg_sponsorowany-3338.html"><strong>bieg sponsorowany</strong>.</a> W wydarzeniu tym, zorganizowanym wsp&oacute;lnie z Rotary Club Warszawa Goethe wzięli udział uczniowie wszystkich klas.<br />
&bdquo;Pomagamy Azji i Afryce&rdquo;-to myśl przewodnia tego biegu, jego celem zaś zbi&oacute;rka funduszy na zakup szczepionek przeciwko polio. Udało nam się zebrać <strong>18 387 z</strong>ł. Zobaczcie klip z tego wydarzenia!<br />
<br />
<iframe src="https://www.youtube.com/embed/19Ui4nQPAG4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
<br />
Tradycyjnie jak w latach ubiegłych przystąpiliśmy do rywalizacji sportowej w <strong>Warszawskiej Olimpiadzie Młodzieży.</strong><br />
<strong>24.09 </strong>w Powsinie odbyły się Mistrzostwa Wilanowa w indywidualnych biegach przełajowych. Naszą szkołę reprezentowało 35 uczestnik&oacute;w z kl. 5-8.<br />
<br />
<u>Do finału Warszawy dostało się dziewięć os&oacute;b:</u><br />
<br />
Karol Bekiera<br />
Emilia Cavalco<br />
Michał Franciszkowski<br />
Alex Franek<br />
Melania Nowakowska<br />
Tomasz Radziwanowski<br />
Artem Saifudinov<br />
Sara Swirtun<br />
Natalia Wiśniewska<br />
<br />
<strong>Największy sukces odniosły:  Emilia 16 miejsce i Sara 39 miejsce w Warszawie w swoich kategoriach wiekowych.</strong><br />
<br />
<br />
W dniu <strong>30.09</strong> na <strong>Mistrzostwach Wilanowa w Piłce Nożnej </strong>nasza drużyna zajęła II miejsce.<br />
Mimo fatalnej pogody chłopcy dali z siebie wszystko, ale niestety po wyr&oacute;wnanej walce oddali zwycięstwo innej drużynie.<br />
Pozostałe swoje mecze wygrywali bez problem&oacute;w.<br />
Dziękujemy i życzymy dalszych sukces&oacute;w.<br />
<br />
<span style="font-size: medium;"><strong>Wszystkim naszym reprezentantom serdecznie gratulujemy i dziękujemy za godne reprezentowanie naszej szkoły.</strong></span><br />
<br />
Zapraszamy do obejrzenia fotogalerii.<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13305/img-20190924-wa0004.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13305/800x600_img-20190924-wa0004.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13306/img-20190924-wa0002.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13306/800x600_img-20190924-wa0002.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13307/img-20190924-wa0003.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13307/800x600_img-20190924-wa0003.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13309/img-20190924-wa0006.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13309/800x600_img-20190924-wa0006.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13310/img-20190924-wa0007.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13310/800x600_img-20190924-wa0007.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13311/img_0409.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13311/800x600_img_0409.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13316/img_0420a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13316/800x600_img_0420a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13317/img_0421a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13317/800x600_img_0421a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13318/img_0423a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13318/800x600_img_0423a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13319/img_4961.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13319/800x600_img_4961.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13320/img_4959.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13320/800x600_img_4959.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13321/img_4960.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13321/800x600_img_4960.jpg);">
			</a',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Sportowa jesień w WBS',
    '',
    'https://wbs.pl/sportowa_jesien_w_wbs-3389.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-151',
    'bieg-sponsorowany-3338',
    'Bieg sponsorowany',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/12985/800x600_sponsorenlauf19-193.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Zdjęcia: Marek Kępiński<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/12986/sponsorenlauf19-40.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12986/800x600_sponsorenlauf19-40.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12987/sponsorenlauf19-44.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12987/800x600_sponsorenlauf19-44.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12988/sponsorenlauf19-76.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12988/800x600_sponsorenlauf19-76.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12989/sponsorenlauf19-114.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12989/800x600_sponsorenlauf19-114.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12990/sponsorenlauf19-255.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12990/800x600_sponsorenlauf19-255.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12991/sponsorenlauf19-471.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12991/800x600_sponsorenlauf19-471.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12992/sponsorenlauf19-649.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12992/800x600_sponsorenlauf19-649.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12993/sponsorenlauf19-663.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12993/800x600_sponsorenlauf19-663.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12994/sponsorenlauf19-601.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12994/800x600_sponsorenlauf19-601.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12995/sponsorenlauf19-231.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12995/800x600_sponsorenlauf19-231.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12996/sponsorenlauf19-704.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12996/800x600_sponsorenlauf19-704.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12997/sponsorenlauf19-1079.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12997/800x600_sponsorenlauf19-1079.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12998/sponsorenlauf19-500.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12998/800x600_sponsorenlauf19-500.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12999/sponsorenlauf19-1271.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12999/800x600_sponsorenlauf19-1271.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Bieg sponsorowany',
    '',
    'https://wbs.pl/bieg_sponsorowany-3338.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-152',
    'sportowa-jesien-w-wbs-2852',
    'Sportowa jesień w WBS',
    '',
    '',
    'Sportowe osiągnięcia naszych uczniów',
    '
		<p class="lead">
			Sportowe osiągnięcia naszych uczniów
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/10089/800x600_sponsorlauf-1278.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				To był naprawdę aktywny początek roku szkolnego dla uczni&oacute;w naszej szkoły. <br />
<br />
Rozpoczęliśmy od udziału w <strong>Zawodach Sportowych Szk&oacute;ł Niemieckich</strong>, kt&oacute;re odbyły się<strong> 21-23 września</strong> w Brukseli. Wybrani uczniowie klas 9-12 uczestniczyli w zawodach lekkoatletycznych, piłki koszykowej, siatkowej i nożnej.<br />
To były bardzo intensywne 3 dni, dużo wysiłku, stresu i mało snu. Zostały pobite 4 rekordy lekkoatletyczne, co mocno zmotywowało naszych uczni&oacute;w do tego, by w przyszłym roku osiągnąć jeszcze lepsze wyniki.<br />
<br />
<strong>24 września </strong>w Powsinie miały miejsce eliminacje dzielnicowe w ramach <strong>Mistrzostw Wilanowa</strong>. Ponad połowa zawodnik&oacute;w, kt&oacute;ra wzięła w nich udział, zakwalifikowała się dalej. Gratulujemy!<br />
<br />
<strong>26 września </strong>nasi uczniowie uczestniczyli w<strong> </strong><a href="http://wbs.pl/wreczenie_pucharowbieg_sponsorowany-2828.html"><strong>Biegu Sponsorowanym</strong></a> &quot;Biegniemy na pomoc Afryce&quot;, kt&oacute;ry odbył się na terenie kampusu Willy Brandt Schule.<br />
<br />
<strong>4 października</strong> w<strong> Mistrzostwach Warszawy AWF </strong>wzięło udział 13 naszych uczni&oacute;w. W każdej kategorii wiekowej startowało ponad 150 os&oacute;b. Pogoda dopisała a walka była iście sportowa. To było cenne doświadczenie dla tych, kt&oacute;rzy myślą o uczestnictwie w maratonach czy biegach ulicznych.<br />
<br />
<strong>10 października</strong> odbyły się <strong>Mistrzostwa Wilanowa</strong> w piłce nożnej chłopc&oacute;w, rocznik 2003-2005. W jednej drużynie, pod okiem trener&oacute;w Jolanty Jeleniak i Macieja Suszczyńskiego grali uczniowie szkoły WBS, trenujący r&oacute;wnież w Akademii piłkarskiej WBS. Ciężko było walczyć z dużo starszymi drużynami, ale nie zabrakło im serca do walki. W ostatnim meczu turnieju wygrali z naszymi sąsiadami, czyli ze Szkołą Podstawową nr 358 👉7:2.Gratulujemy!<br />
<br />
<strong>Serdecznie gratulujemy wygranych i życzymy kolejnych sukces&oacute;w!</strong><br />
<br />
			</p>

		</div>
			

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/10046/iv_europaspiele_brÜssel1.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10046/800x600_iv_europaspiele_brÜssel1.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10065/2.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10065/800x600_2.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10066/3.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10066/800x600_3.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10067/4.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10067/800x600_4.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10068/5.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10068/800x600_5.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10069/6a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10069/800x600_6a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10070/7.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10070/800x600_7.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10071/9a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10071/800x600_9a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10072/10a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10072/800x600_10a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10073/11a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10073/800x600_11a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10074/12a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10074/800x600_12a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10075/13a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10075/800x600_13a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/10076/14a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/10076/800x600_14a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cm',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Sportowa jesień w WBS',
    'Sportowe osiągnięcia naszych uczniów',
    'https://wbs.pl/sportowa_jesien_w_wbs-2852.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-153',
    'archiwalne-nagrania-z-7-grudnia-1970-3835',
    'Archiwalne nagrania z 7 grudnia 1970',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15137/800x600_www4.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<iframe src="https://www.youtube.com/embed/HGPlGW0HJAU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
<br />
<iframe src="https://www.youtube.com/embed/GZLh9oMMo3w" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
<br />
<iframe src="https://www.youtube.com/embed/gri1shAfqbI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
<br />
Wir empfehlen auch:<br />
https://www.willy-brandt-biografie.de/quellen/videos/kniefall-warschau-1970/<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Archiwalne nagrania z 7 grudnia 1970',
    '',
    'https://wbs.pl/archiwalne_nagrania_z_7_grudnia_1970-3835.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-154',
    'spotkanie-z-pania-kayser-poswiecone-upamietnieniu-ofiar-obozu-w-oswiecimiu-3542',
    'Spotkanie z Panią Kayser poświęcone upamiętnieniu ofiar obozu w Oświęcimiu',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13982/800x600_wbs-kayser20-27.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Z okazji 75. rocznicy wyzwolenia obozu koncentracyjnego Auschwitz, naszej szkole udało się zaprosić na to wydarzenie znaną pisarkę Juliane Sophie Kayser.<br />
<br />
Opr&oacute;cz słynnych książek dla dzieci, autorka w poruszający spos&oacute;b podeszła do tematu Holocaustu.<br />
<br />
Przed uczniami klas od dziewiątej do jedenastej przeczytała po raz pierwszy swoją najnowszą pracę. W drugiej części godziny upamiętnienia zaprezentowała wiersze, kt&oacute;re zostały zilustrowane zdjęciami i dotyczyły cierpienia ofiar Auschwitz.<br />
<br />
Katarzyna Osokin z wielką wprawą muzyczną na fortepianie towarzyszyła uroczystościom upamiętniającym. Taruna Jung i Helena Ciszewska wyrecytowały przejmujący poemat &quot;Last dieser Welt&quot; Josepha Barona ekspresyjnie w języku niemieckim i polskim.<br />
<br />
WBS pragnie podziękować pani Kayser i wszystkim zaangażowanym za zorganizowanie tego wydarzenia.<br />
<br />
Norbert St&uuml;we, nauczyciel historii  <br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13983/wbs-kayser20-26.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13983/800x600_wbs-kayser20-26.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13984/wbs-kayser20-3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13984/800x600_wbs-kayser20-3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13985/wbs-kayser20-6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13985/800x600_wbs-kayser20-6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13986/wbs-kayser20-12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13986/800x600_wbs-kayser20-12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13987/wbs-kayser20-22.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13987/800x600_wbs-kayser20-22.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13988/wbs-kayser20-39.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13988/800x600_wbs-kayser20-39.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13989/wbs-kayser20-40.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13989/800x600_wbs-kayser20-40.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13990/wbs-kayser20-46.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13990/800x600_wbs-kayser20-46.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13991/wbs-kayser20-61.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13991/800x600_wbs-kayser20-61.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13992/wbs-kayser20-70.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13992/800x600_wbs-kayser20-70.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13993/wbs-kayser20-77.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13993/800x600_wbs-kayser20-77.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13994/wbs-kayser20-102.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13994/800x600_wbs-kayser20-102.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Spotkanie z Panią Kayser poświęcone upamiętnieniu ofiar obozu w Oświęcimiu',
    '',
    'https://wbs.pl/spotkanie_z_pania_kayser_poswiecone_upamietnieniu_ofiar_obozu_w_oswiecimiu-3542.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-155',
    'wazne-informacje-dotyczace-nauczania-hybrydowego-3980',
    'Ważne informacje dotyczące nauczania hybrydowego',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15758/800x600_schön,_dass_du_da_bist.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Państwo, Drodzy Uczniowie klas 9-12, <br />
<br />
zgodnie z decyzją polskiego rządu w kolejnych dw&oacute;ch tygodniach (17-28.05.21) uczniowie klas 5-11 będą uczestniczyć w zajęciach hybrydowych. Ponieważ klasy 4 zgodnie z niemieckim systemem szkolnictwa należą do szkoły podstawowej, uczniowie obu tych klas, na podstawie otrzymanego pozwolenia, mogę uczestniczyć w tym czasie w nauczaniu stacjonarnym. Stosownie do rozporządzenia MEN-u w szkole może przebywać ok. 50 % uczni&oacute;w. Z uwagi na specyfikę naszej szkoły w kwestii lekcji łączonych, na zajęcia stacjonarne powr&oacute;cą klasy tego samego rocznika. Oznacza to, że w pierwszym tygodniu (17-21.05) w szkole będą uczniowie klas 5, 7, 9 i 11, a w drugim tygodniu (24-28.05) uczniowie klas 6, 8 i 10. Chciałabym przypomnieć, iż w dniach 24-28.05.21 odbywać się będą w szkole ustne egzaminy maturalne, natomiast 25-27.05.21 egzamin &oacute;smoklasisty. <br />
<br />
Ponieważ powr&oacute;t uczni&oacute;w do szkoły po tak długim okresie nauki online oraz zachowanie odpowiedniego odstępu we wszystkich pomieszczeniach klasowych może być trudne, chcemy umożliwić korzystanie z dodatkowych sal lekcyjnych w przypadku potrzeby podziału klasy na grupy. Dlatego konieczna jest obecność w szkole całego grona pedagogicznego. Zgodnie z informacją w Wocheninfo uczniowie pozostający w domu otrzymają na początku tygodnia plan pracy na cały tydzień. Nauczyciele zostali poinformani, aby w kolejnych dw&oacute;ch tygodniach (17-28.05.21) prace klasowe odbywały się tak jak dotychczas w formie prac zastępczych. W związku z dużym zaangażowaniem nauczycieli podczas lekcji stacjonarnych, zostają zawieszone zajęcia online. Jednak w najbliższym czasie zaproponujemy uczniom klas 5-7 możliwość skorzystania z  dw&oacute;ch godzin lekcyjnych w formie wideokonferencji  (rano i w południe). Oferta ta ma służyć podtrzymania kontaktu z nauczycielami i kolegami. Wkr&oacute;tce poinformujemy Państwa o szczeg&oacute;łach.<br />
<br />
Nauczyciele oraz pracownicy socjalni szkoły są przygotowani na powr&oacute;t uczni&oacute;w do szkoły i możliwość wystąpienia trudności adaptacyjnych po tak długim okresie nauki zdalnej. Uczniowie będą musieli ponownie przyzwyczaić się do nauki stacjonarnej i obowiązujących w szkole zasad.<br />
<br />
Po okresie 14 dni planowany jest powr&oacute;t wszystkich uczni&oacute;w do szkoły. Jak tylko otrzymamy oficjane informacje, niezwłocznie je Państwu przekażemy.<br />
<br />
15.05 zostaje zniesiony nakaz noszenia maseczek na zewnątrz. Zasady te będą obowiązywały także w naszej szkole. W budynku nadal będą obowiązywały maseczki. W pomieszczeniach klasowych, gdzie zachowany jest dystans 1,5 metra, istnieje możliwość zdjęcia maseczki po wcześniejszej konsultacji z nauczycielem. Powyższe zasady zostały skonsultowane i zaakceptowane przez przedstawiciela MEN-u. Prosimy o om&oacute;wienie z Państwa dziećmi konieczności zachowania zasad zasłaniania ust i nosa. <br />
<br />
Cieszymy się, że już wkr&oacute;tce powitamy naszych uczni&oacute;w w szkole i mamy nadzieję, że sytuacja pandemiczna będzie się stopniowo poprawiać.<br />
<br />
Cały zesp&oacute;ł WBS dziękuje za Państwa wsparcie w tym trudnym czasie.<br />
<br />
Mit freundlichen Gr&uuml;&szlig;en / Serdecznie pozdrawiam<br />
Mechthild Hinsberger-Boguski<br />
Schulleiterin / Dyrektor Szkoły<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'ogloszenia'),
    'published',
    NULL,
    'Ważne informacje dotyczące nauczania hybrydowego',
    '',
    'https://wbs.pl/wazne_informacje_dotyczace_nauczania_hybrydowego-3980.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-156',
    'wytyczne-dotyczace-nauczania-stacjonarnego-i-zdalnego-w-wbs-3982',
    'Wytyczne dotyczące nauczania stacjonarnego i zdalnego w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15760/800x600_img_20200520_173103_neu.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Wytyczne dotyczące nauczania stacjonarnego i zdalnego w WBS
				</td>
				<td>
					<a href="pub/cms/files/1598/wytyczne_dotyczace_nauczania_stacjonarnego_i_zdalnego_w_wbs_17.05.2021.pdf" title="Wytyczne dotyczące nauczania stacjonarnego i zdalnego w WBS" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wytyczne dotyczące nauczania stacjonarnego i zdalnego w WBS',
    '',
    'https://wbs.pl/wytyczne_dotyczace_nauczania_stacjonarnego_i_zdalnego_w_wbs-3982.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-157',
    'akademia-muzyczna-wbs-podczas-finalu-akcji-charytatywnej-3463',
    'Akademia Muzyczna WBS podczas finału akcji charytatywnej',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13520/800x600_img_20191123_133209.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				23.11.2019 w ramach festynu charytatywnego &quot;Słoiki z Wilanowa dla Frania&quot;, wystąpiły uczennice Akademii Muzycznej WBS&nbsp;i szkoły WBS: Julia Lubczyk, Sara Lobnig, Sophie Eull i Emilia Chałas. Występy zostały bardzo ciepło przyjęte przez publiczność. Gratulujemy!<br />
Dyrektor Akademii Muzycznej WBS <br />
Marcin Lemiszewski<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13521/img_20191123_132924.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13521/800x600_img_20191123_132924.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13522/img_20191123_132408.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13522/800x600_img_20191123_132408.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13523/img_20191123_133643.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13523/800x600_img_20191123_133643.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Akademia Muzyczna WBS podczas finału akcji charytatywnej',
    '',
    'https://wbs.pl/akademia_muzyczna_wbs_podczas_finalu_akcji_charytatywnej_-3463.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-158',
    'covid19-aktualne-informacje-i-zalecenia-warszawa-z-czerwonej-strefie-3775',
    'Covid-19. Aktualne informacje i zalecenia  – Warszawa z czerwonej strefie',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14828/800x600_covid-19-4960254_1920.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Od soboty Warszawa, podobnie jak 152 miasta i powiaty w Polsce, zostanie ogłoszona <strong>czerwoną strefą</strong>. Poinformowali o tym na wczorajszej konferencji prasowej premier M. Morawiecki i minister zdrowia A. Niedzielski. Sytuacja ta dotyczy 70 % społeczeństawa w Polsce.<br />
<strong>W strefie czerwonej, we wszystkich miejscach publicznych obowiązuje zakrywanie ust i nosa. </strong><br />
<u>Ponadto:<br />
</u><br />
-lokale gastronomiczne mogę być otwarte w godz. 6:00 &ndash; 21:00. Zajęty może być co drugi stolik. Po godz. 21:00 wyłącznie możliwość zam&oacute;wienia posiłk&oacute;w na wynos;<br />
- ograniczenie liczba os&oacute;b w transporcie publicznym &ndash; zajętych może być 50 proc. miejsc siedzących lub 30 proc. liczby wszystkich miejsc;<br />
- wydarzenia sportowe bez udziału publiczności;<br />
- w wydarzeniach kulturalnych max. 25 proc. miejsc zajętych przez publiczność;<br />
- zawieszona działalność basen&oacute;w, aquapark&oacute;w i siłowni.<br />
- uniwersytety i szkoły średnie wracają do znalnego nauczania<br />
<br />
Szczeg&oacute;ły na stronie: <a href="https://www.gov.pl/web/koronawirus/nowe-zasady-profilaktyki-przeciw-covid-19">https://www.gov.pl/web/koronawirus/nowe-zasady-profilaktyki-przeciw-covid-19</a><br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Covid-19. Aktualne informacje i zalecenia  – Warszawa z czerwonej strefie',
    '',
    'https://wbs.pl/covid19_aktualne_informacje_i_zalecenia____warszawa_z_czerwonej_strefie-3775.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-159',
    'koncerty-uczniow-akademii-muzycznej-wbs-5201',
    'Koncerty uczniów Akademii Muzycznej WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/26214/800x600_image00013.jpeg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				&nbsp;W styczniu odbyły się trzy koncerty uczni&oacute;w Akademii Muzycznej WBS: 16-go stycznia &ndash; Koncert Noworoczny, 19-go stycznia &ndash; Koncert zimowy i 20-go stycznia Koncert Styczniowy. Łącznie zaprezentowało się ponad 90 wykonawc&oacute;w grających na r&oacute;żnych instrumentach muzycznych, śpiewających i tańczących. Było to ponad 5 godzin wspaniałych wrażeń muzycznych. Gratulujemy serdecznie występ&oacute;w!<br />
<br />
Marcin Lemiszewski<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/26215/image00001.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26215/800x600_image00001.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26216/image00002.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26216/800x600_image00002.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26217/image00003.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26217/800x600_image00003.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26218/image00004.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26218/800x600_image00004.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26219/image00005.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26219/800x600_image00005.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26220/image00006.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26220/800x600_image00006.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26221/image00007.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26221/800x600_image00007.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26222/image00008.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26222/800x600_image00008.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26223/image00009.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26223/800x600_image00009.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26224/image00010.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26224/800x600_image00010.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26225/image00011.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26225/800x600_image00011.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26226/image00012.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26226/800x600_image00012.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26227/image00013.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26227/800x600_image00013.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26228/image00014.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26228/800x600_image00014.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26229/image00015.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26229/800x600_image00015.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26230/image00016.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26230/800x600_image00016.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26231/image00017.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26231/800x600_image00017.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26232/image00018.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26232/800x600_image00018.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26233/image00019.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26233/800x600_image00019.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26234/image00021.jpeg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/26234/800x600_image00021.jpeg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/26235/image00022.jpeg" rel="prettyPhoto[gallery1]" title="" style="ba',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Koncerty uczniów Akademii Muzycznej WBS',
    '',
    'https://wbs.pl/koncerty_uczniow_akademii_muzycznej_wbs-5201.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-160',
    'powitanie-pierwszych-klas-3316',
    'Powitanie pierwszych klas',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/12820/800x600_kolaz.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Fotos: Marek Kępiński<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/12821/1a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12821/800x600_1a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12822/1c.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12822/800x600_1c.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12823/08_einschulung_19-5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12823/800x600_08_einschulung_19-5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12824/08_einschulung_19-56.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12824/800x600_08_einschulung_19-56.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12825/08_einschulung_19-111.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12825/800x600_08_einschulung_19-111.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12826/08_einschulung_19-165.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12826/800x600_08_einschulung_19-165.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12827/08_einschulung_19-181.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12827/800x600_08_einschulung_19-181.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12828/08_einschulung_19-585.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12828/800x600_08_einschulung_19-585.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12829/08_einschulung_19-797.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12829/800x600_08_einschulung_19-797.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12830/08_einschulung_19-853.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12830/800x600_08_einschulung_19-853.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12831/08_einschulung_19-872.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12831/800x600_08_einschulung_19-872.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12832/08_einschulung_19-889.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12832/800x600_08_einschulung_19-889.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12833/08_einschulung_19-995.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12833/800x600_08_einschulung_19-995.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12834/08_einschulung_19-985.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12834/800x600_08_einschulung_19-985.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12835/08_einschulung_19-1115.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12835/800x600_08_einschulung_19-1115.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12836/08_einschulung_19-1120.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12836/800x600_08_einschulung_19-1120.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12837/08_einschulung_19-1001.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12837/800x600_08_einschulung_19-1001.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Powitanie pierwszych klas',
    '',
    'https://wbs.pl/powitanie_pierwszych_klas-3316.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-161',
    'projekt-komiksowy-historyczny-gest-willyego-brandta-3828',
    'Projekt komiksowy: Historyczny gest Willy''ego Brandta',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15123/800x600_www.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: center;">Wehikułem czasu na spotkanie z Willy Brandtem</div>
<br />
<br />
Podr&oacute;ż w czasie od zawsze fascynowała ludzkość. Mimo ogromnego postępu technologicznego do dzisiaj człowiekowi nie udało się zbudować maszyny, kt&oacute;ra pozwalałaby na wędr&oacute;wkę w czasoprzestrzeni. Uczniowie naszej szkoły podczas lekcji historii odbyli sentymentalną podr&oacute;ż, podczas kt&oacute;rej byli świadkami przełomowego wydarzenia. Za pomocą multimedialnych narzędzi przenieśli się do drugiej połowy XX wieku i odtworzyli  wizytę kanclerza Republiki Federalnej Niemiec Willy''ego Brandta w Polsce. Wizualizacje, komiksy  pokazywały miejsca, kt&oacute;re odwiedził kanclerz, ukazywały cel  jego wizyty, ale przede wszystkim akcentowały gest Willy''ego Brandta, spontaniczny, wykraczający poza obowiązujący protok&oacute;ł dyplomatyczny. Uczniowie zwr&oacute;cili uwagę, że uklęknięcie kanclerza, do kt&oacute;rego doszło na terenie dawnego getta warszawskiego  było zdarzeniem przełomowym w dziejach trzech narod&oacute;w: polskiego, niemieckiego i żydowskiego. Podr&oacute;ż w czasie, kt&oacute;rą odbyliśmy pozwoliła dzieciom na rozwijanie aktywności tw&oacute;rczej, a także na poznanie i poddanie ocenie ważnych, historycznych wydarzeń. <br />
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Anastasia
				</td>
				<td>
					<a href="pub/cms/files/1461/anastasia.pdf" title="Anastasia" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Shan
				</td>
				<td>
					<a href="pub/cms/files/1462/comic._shan.pdf" title="Shan" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Deniz
				</td>
				<td>
					<a href="pub/cms/files/1463/deniz.pdf" title="Deniz" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					F.Kuch
				</td>
				<td>
					<a href="pub/cms/files/1464/f._kuch.pdf" title="F.Kuch" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Filip
				</td>
				<td>
					<a href="pub/cms/files/1465/filip_blazeczek.pdf" title="Filip" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Hania
				</td>
				<td>
					<a href="pub/cms/files/1466/hania.pdf" title="Hania" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Helena
				</td>
				<td>
					<a href="pub/cms/files/1467/helena.pdf" title="Helena" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Laura
				</td>
				<td>
					<a href="pub/cms/files/1468/laura.pdf" title="Laura" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Marysia
				</td>
				<td>
					<a href="pub/cms/files/1469/marysia_sw.pdf" title="Marysia" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Michael
				</td>
				<td>
					<a href="pub/cms/files/1470/michael.pdf" title="Michael" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					T.Jasiewicz
				</td>
				<td>
					<a href="pub/cms/files/1471/t._jasiewicz.pdf" title="T.Jasiewicz" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Tymon
				</td>
				<td>
					<a href="pub/cms/files/1472/tymon.pdf" title="Tymon" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					W.Luchowska
				</td>
				<td>
					<a href="pub/cms/files/1473/w.luchowska.pdf" title="W.Luchowska" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					TJ8a
				</td>
				<td>
					<a href="pub/cms/files/1600/tj8a.pdf" title="TJ8a" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Zosia
				</td>
				<td>
					<a href="pub/cms/files/1601/zosia_hd_6c.png" title="Zosia" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
						<tr>
				<td>
					Zosia
				</td>
				<td>
					<a href="pub/cms/files/1602/zosia_k_6c.jpg" title="Zosia" target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15124/aniata2.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Projekt komiksowy: Historyczny gest Willy''ego Brandta',
    '',
    'https://wbs.pl/projekt_komiksowy_historyczny_gest_willyego_brandta-3828.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-162',
    'wielkanocne-prace-klasy-2-i-3-3944',
    'Wielkanocne prace klasy 2 i 3',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15557/800x600_1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<blockquote>
<div style="text-align: center;"><span style="font-size: medium;"><br />
</span></div>
</blockquote>
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15558/2.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15558/800x600_2.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15559/3.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15559/800x600_3.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15560/4.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15560/800x600_4.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15561/5.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15561/800x600_5.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15562/6.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15562/800x600_6.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15563/7.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15563/800x600_7.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15564/8.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15564/800x600_8.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15565/9.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15565/800x600_9.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15566/10.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15566/800x600_10.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15567/obraz1.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15567/800x600_obraz1.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15568/obraz2.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15568/800x600_obraz2.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15569/obraz3.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15569/800x600_obraz3.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15570/obraz5.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15570/800x600_obraz5.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15571/obraz6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15571/800x600_obraz6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15572/obraz7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15572/800x600_obraz7.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15573/obraz8.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15573/800x600_obraz8.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15574/obraz9.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15574/800x600_obraz9.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15575/obraz10.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15575/800x600_obraz10.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15576/obraz11.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15576/800x600_obraz11.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15577/obraz12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15577/800x600_obraz12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15578/obraz13.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15578/800x600_obraz13.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15579/obraz14.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15579/800x600_obraz14.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15580/obraz15.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15580/800x600_obraz15.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15581/obraz16.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15581/800x600_obraz16.jpg',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wielkanocne prace klasy 2 i 3',
    '',
    'https://wbs.pl/wielkanocne_prace_klasy_2_i_3-3944.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-163',
    'swiatowy-dzien-ksiazki-i-praw-autorskichzdjecia-3639',
    'Światowy Dzień Książki i Praw Autorskich-Zdjęcia',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14272/800x600_kolaz1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				23 kwietnia obchodziliśmy Światowy Dzień Książki i Praw Autorskich. W tym roku nasze dzieci świętowały ten dzień zupełnie inaczej, a mianowicie w domu. Mamy nadzieję, że dobre książki pomogą Wam oderwać się od codzienności.<br />
Zapraszamy wszystkich do obejrzenia galerii zdjęć naszych moli książkowych WBS. <br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14253/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14253/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14254/img_0446.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14254/800x600_img_0446.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14255/img_9524.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14255/800x600_img_9524.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14256/ka5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14256/800x600_ka5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14257/ka6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14257/800x600_ka6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14258/ka7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14258/800x600_ka7.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14259/ka8.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14259/800x600_ka8.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14260/ka10.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14260/800x600_ka10.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14261/ka14.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14261/800x600_ka14.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14262/ka17.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14262/800x600_ka17.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14263/1a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14263/800x600_1a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14264/20200424_003903.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14264/800x600_20200424_003903.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14265/img_9527a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14265/800x600_img_9527a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14266/ka1a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14266/800x600_ka1a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14267/ka9a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14267/800x600_ka9a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14268/ka11.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14268/800x600_ka11.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14269/ka12a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14269/800x600_ka12a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14270/ka13a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14270/800x600_ka13a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14271/ka15a.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14271/800x600_ka15a.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14293/borys_6a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14293/800x600_borys_6a.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Światowy Dzień Książki i Praw Autorskich-Zdjęcia',
    '',
    'https://wbs.pl/swiatowy_dzien_ksiazki_i_praw_autorskichzdjecia-3639.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-164',
    'konkurs-piosenki-niemieckojezycznej-dachll-3912',
    'Konkurs Piosenki Niemieckojęzycznej DACHL-L',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15503/800x600_www.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W tegorocznej edycji konkursu DACHL-L brała udział liczna reprezentacja uczni&oacute;w z naszej Akademii Muzycznej WBS&nbsp;i szkoły WBS. Konkurs odbył się w formie online. Wszystkim naszym uczestnikom gratulujemy bardzo udanych występ&oacute;w. Szczeg&oacute;lne osobom, kt&oacute;re zostały laureatami konkursu: <br />
<br />
Sara Lobnig - GRAND PRIX konkursu <br />
Katarzyna Osokin &ndash; wyr&oacute;żnienie w grupie starszej (liceum) <br />
Nina Poniatowska &ndash; III nagroda w grupie młodszej (klsy 1-3) <br />
Nina Poniatowska &ndash; Nagroda za najładniej zaśpiewaną piosenkę o zwierzętach <br />
Anita Dżagarow &ndash; wyr&oacute;żnienie w grupie młodszej <br />
<br />
Bardzo serdecznie gratulujemy i zachęcamy do udziału wszystkich w kolejnej edycji za rok. <br />
<br />
Marcin Lemiszewski <br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Konkurs Piosenki Niemieckojęzycznej DACHL-L',
    '',
    'https://wbs.pl/konkurs_piosenki_niemieckojezycznej_dachll-3912.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-165',
    'podroz-do-berlina-3461',
    'Podróż do Berlina',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13509/800x600_img_20191120_112246_resized_20191120_114341512.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Grupa 20 uczennic i uczni&oacute;w z klas 9a i c wraz z nauczycielkami wzięła udział&nbsp; w wycieczce do Berlina, by podnieść swoje umiejętności językowe. Bogaty program kulturoznawczo-historyczny umożliwił im poszerzenie wiedzy o Niemczech.<br />
Nauczycielki towarzyszące grupie: Andrea Bagdasarian, Petra St&uuml;we<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13510/img_20191119_095202_resized_20191119_122107505.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13510/800x600_img_20191119_095202_resized_20191119_122107505.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13511/img_20191120_135640_resized_20191120_015827629.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13511/800x600_img_20191120_135640_resized_20191120_015827629.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13512/img_20191120_184141_resized_20191120_102141063.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13512/800x600_img_20191120_184141_resized_20191120_102141063.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13513/img_20191121_110157_resized_20191121_042926516.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13513/800x600_img_20191121_110157_resized_20191121_042926516.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13514/img_20191121_110311_resized_20191121_042927378.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13514/800x600_img_20191121_110311_resized_20191121_042927378.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13515/img_20191121_142813_resized_20191121_042927784.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13515/800x600_img_20191121_142813_resized_20191121_042927784.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Podróż do Berlina',
    '',
    'https://wbs.pl/podroz_do_berlina-3461.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-166',
    'wracamy-na-boisko-3958',
    'Wracamy na boisko!',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15623/800x600_akademia_pilkarska.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Cieszymy się, że piłkarki i piłkarze Akademii Piłkarskiej WBS Warszawa wr&oacute;cili do trening&oacute;w i zn&oacute;w mogą spotkać się na piłkarskich boiskach! Co więcej, w najbliższy weekend wracają rozgrywki ligowe, a nasze drużyny wezmą udział w 12 spotkaniach ligowych na terenie całej Warszawy.<br />
Dobrze jest zn&oacute;w widzieć się na boisku! <img src="https://wbs.pl/cms/class/extends/fckeditor/editor/images/smiley/msn/regular_smile.gif" alt="" /><br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wracamy na boisko!',
    '',
    'https://wbs.pl/wracamy_na_boisko-3958.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-167',
    'dostalismy-dyplom-z-unicefu-3544',
    'Dostaliśmy dyplom z UNICEFU',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14013/800x600_clipboard01.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				20 listopada 2019 roku nasza szkoła wzięła udział w obchodach Międzynarodowego Dnia Praw Dziecka. Świętowaliśmy 30 rocznicę uchwalenia Konwencji o prawach dziecka. Przy tworzeniu programu obchod&oacute;w korzystaliśmy z materiał&oacute;w opracowanych przez UNICEF, od kt&oacute;rego otrzymaliśmy właśnie dyplom za zaangażowanie w projekt. <br />
Dziękujemy wszystkim klasom, kt&oacute;re wzięły udział w tym wydarzeniu i nauczycielom oraz rodzicom z Elternbeirat za pomoc. <br />
<br />
<div style="text-align: center;"><img src="/pub/uploader/images/Clipboard02.jpg" alt="Clipboard02.jpg" width="684" height="960" /></div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dostaliśmy dyplom z UNICEFU',
    '',
    'https://wbs.pl/dostalismy_dyplom_z_unicefu-3544.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-168',
    'instagram-story-project-dla-goethe-institut-warschau-3513',
    'Instagram Story Project dla Goethe Institut Warschau',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13835/800x600_heckershow.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				3 grudnia odbył się na Stadionie Narodowym w Warszawie pokaz  &ldquo;Joachim Hecker Science Show&rdquo; dla dzieci w  wieku 8-12 lat. Joachim Hecker jest naukowcem, kt&oacute;ry fascynuje się nauką i chętnie przeprowadza przed widownią interesujące eksperymenty. Joachim Hecker jest r&oacute;wnież autorem książek &quot;Das Raumschiff der kleinen Forscher&quot; i &quot;Das Haus der kleinen Forscher&quot;, w kt&oacute;rych opisuje najciekawsze eksperymenty do samodzielnego przeprowadzenia.<br />
Podczas &ldquo;Joachim Hecker Science Show&rdquo; mogliśmy obejrzeć wiele zapierających dech w piersiach eksperyment&oacute;w, do przeprowadzenia kt&oacute;rych zawsze zapraszane były dzieci z  widowni. Pokaz odbył się w języku niemieckim, ale był tłumaczony na język polski, dzięki czemu wszystkie dzieci mogły brać aktywny udział w pokazie.<br />
My, czyli  Wera Pacewicz i Filip Kuch uczniowie  Willy-Brandt-Schule mieliśmy okazję zostać oficjalnymi fotoreporterami tego wydarzenia i opublikować efekt naszej pracy na instagramowym koncie Goethe Institut w Warszawie. <br />
Przybyliśmy o 10:00 dość poddenerwowani nie wiedząc, co nas czeka. Obejrzeliśmy dwa pokazy, o 10:30 - 12:00 i  12:15 - 13:30, a w przerwie miedzy nimi  przeprowadziliśmy wywiad z panem Jachimem Hecker&rsquo;em:<br />
<br />
Reporterzy (My):<br />
Czy jako dziecko przeprowadzał Pan eksperymenty? Jeśli tak, to jakie? <br />
<br />
Joachim Hecker: <br />
Jako dziecko rozkładałem na części wszystkie urządzenia i ponownie je składałem. Robiłem r&oacute;wnież eksperymenty, na przykład eksperyment z zegarem z pozytywką. <br />
<br />
Reporterzy:<br />
Jak rozpoczęła się Pana przygoda z eksperymentowaniem?<br />
<br />
Joachim Hecker:<br />
Moja c&oacute;rka m&oacute;wi, że jestem dużym, dzieckiem, kt&oacute;re chętnie się bawi. Ale mogę żyć z tego, co piękne. <br />
<br />
Reporterzy:<br />
Kim chciał Pan zostać w dzieciństwie? Czy obecnie wykonywana praca była Pana pracą marzeń? <br />
<br />
Joachim Hecker: <br />
Nie, jako dziecko marzyłem o prowadzeniu lokomotywy.<br />
<br />
Reporterzy: <br />
Dziękujemy za udzielenie wywiadu.<br />
<br />
Jesteśmy wdzięczni za możliwość obejrzenia pokazu, kt&oacute;ry bardzo nam się podobał. Naszą fotorelację i wywiad można obejrzeć na koncie Goethe Institut Warschau, kt&oacute;re zrobiło nam ogromną niespodziankę publikując ten materiał.<br />
<br />
<a href="https://www.instagram.com/stories/highlights/17863504402585644/?hl=pl">https://www.instagram.com/stories/highlights/17863504402585644/?hl=pl</a><br />
<br />
Filip Kuch <br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Instagram Story Project dla Goethe Institut Warschau',
    '',
    'https://wbs.pl/instagram_story_project_dla_goethe_institut_warschau-3513.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-169',
    'uroczystosc-inauguracji-roku-szkolnego-2805',
    'Uroczystość inauguracji roku szkolnego',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/9685/800x600_wbs_eroffnung18_19-58.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				Drogie uczennice i drodzy uczniowie, drodzy rodzice, <br />
drogie nauczycielki i drodzy nauczyciele,<br />
<br />
piosenką, prawdopodobnie  wszystkim znaną, witam Was w nowym roku szkolnym 2018 / 19. <br />
<br />
Zastanawiacie się pewnie teraz, czy wasza Pani dyrektor zwariowała ? Nie, nie zwariowała albo najwyżej troszeczkę.<br />
<br />
Ona chce tylko pokazać, co łączy naszą szkołę ze światem Pippi w willi Kunterbunt i w jaki pozytywny spos&oacute;b jej pomysły, jeżeli uda się  nam wszystkim wprowadzić niekt&oacute;re z nich w życie szkolne, wpłyną na nasze wzajemne relacje w nowym roku szkolnym.<br />
<br />
Bo jeżeli to, co się każdego dnia robi nie sprawia wykonującemu radości, to nie można w takiej sytuacji być szczęśliwym. A dobrze uczyć się można tylko wtedy, jeżeli się dobrze czujemy i nauka sprawia nam radość.<br />
<br />
1. PO PIERWSZE <br />
Pippi ma &ndash; tak jak większość z nas potrzebę ruchu.  Bo jak stwierdzono<br />
w badaniach naukowych, nasz system szkolnictwa prowadzi do bezruchu.<br />
W naszej Szkole &ndash; WBS jest inaczej: piłka nożna, trzy przerwy w ruchu na świeżym <br />
powietrzu, chodzenie  cały dzień  po schodach w g&oacute;rę i w d&oacute;ł, tańczenie na wszystkich<br />
uroczystościach szkolnych  - Czy to nie jest prawdziwa radość życia ?<br />
<br />
<ul>
    <li>W moim słodkim rożku pierwszoklasisty,  w kt&oacute;ry włożyłam r&oacute;wnieżkawę, cukierki lukrecji i orzechy, zanotowałam:</li>
    <li>RADOŚĆ  ŻYCIA  i TAŃCZENIE</li>
</ul>
<br />
2 PO DRUGIE<br />
Pippi m&oacute;wi to, co myśli. Jest samodzielna, niezależna i wolna. Za to została<br />
zamknięta w szafie, w kt&oacute;rej znajdowała się trucizna, ale z reguły dzięki swoim pytaniom, <br />
kt&oacute;re stawiała  na przykład nauczycielce, odniosła sukces i zmusiła wszystkich do myślenia.<br />
Jeżeli jest się uprzejmym i kulturalnym, ma się prawo i powinność  w wolnym świecie  do<br />
stawiania pytań dotyczących r&oacute;żnych rzeczy w celu ulepszenia świata.<br />
To oczywiście odnosi się przede wszystkim do uczennic i uczni&oacute;w WBS, do wszystkich<br />
Rodzic&oacute;w i Nauczycieli naszej szkoły. <br />
Wzajemne komunikowanie się przyjaznym, pozytywnym i konstruktywnym tonem prowadzi nas  naprz&oacute;d.<br />
<ul>
    <li>W moim słodkim rożku pierwszoklasisty zanotowałam:</li>
</ul>
SAMOKRYTYKA oraz<br />
UPRZEJMOŚĆ  i GRZECZNOŚĆ .<br />
<br />
3. PO TRZECIE: <br />
Pippi ma fantazję i odwagę powiedzenia NIE, jeżeli widzi niesprawiedliwość <br />
i jeżeli pr&oacute;buje się jej narzucić jakąś modę.<br />
<br />
Czy jesteśmy zdolni wstać i powiedzieć NIE, jeżeli na przykład ktoś <br />
padł ofiarą mobbingu?<br />
Czy jesteśmy zdolni żyć stylem z wartościami i nie damy się zniewolić posiadaniem najnowszego iPhone&rsquo;a i najnowszych adidas&oacute;w NIKE, żeby tym zademonstrować,<br />
jak jesteśmy zamożni?<br />
<br />
MIEĆ czy BYĆ &ndash; oto jest pytanie ? &ndash; Pippi opowiada się oczywiście po stronie BYĆ.<br />
Dla niej pieniądze nie są takie ważne. Ona często obdarowuje innych prezentami, dzieląc się tym, co posiada. A co z WBS ?<br />
W moim słodkim rożku pierwszoklasisty zanotowałam:<br />
<ul>
    <li>WRAŻLIWOŚĆ  SOCJALNA</li>
</ul>
<br />
4. PO CZWARTE: <br />
Pippi jest lubiana przez wielu ludzi, kt&oacute;rzy podobnie jak jej liczne piegi na twarzy, gęsto rozsiani są po całym świecie.<br />
Właściwie to tak jak  w WBS: wiele narodowości, tradycji i język&oacute;w obcych &ndash; bardzo kolorowo, czasami bardzo przyjemny i dowcipny chaos.<br />
<br />
Humoru nie możemy nigdy dać sobie odebrać. Dlatego zanotowałam r&oacute;wnież ten wyraz w moim słodkim rożku pierwszoklasisty (Schult&uuml;te).
<ul>
    <li>HUMOR</li>
</ul>
<br />
5. PO PIĄTE:<br />
Pippi integruje się dobrze, interesuje się nowymi ludźmi i tak w og&oacute;le interesują ją wszelkie nowości.<br />
<br />
To tak jak w WBS. <br />
Dlatego zapraszam teraz  do mnie na scenę nasze nowe uczennice i nowych uczni&oacute;w, jak r&oacute;wnież nowe Koleżanki i nowych Koleg&oacute;w,  kt&oacute;rych chciałabym serdecznie powitać.<br />
<br />
Wszystkim życzę urozmaiconego i radosnego nowego roku szkolnego, w ciągu kt&oacute;rego wszyscy  będziemy się dobrze czuli i będziemy mogli być sobą.<br />
<br />
<br />
M. Hinsberger-Boguski<br />
Dyrektor Szkoły<br />
<br />
<br />
<br />
<br />
<br />
Zdjęcia Marek Kępiński
			</p>
		</div>


		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/9686/wbs_eroffnung18_19-82.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9686/800x600_wbs_eroffnung18_19-82.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9687/wbs_eroffnung18',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Uroczystość inauguracji roku szkolnego',
    '',
    'https://wbs.pl/uroczystosc_inauguracji_roku_szkolnego-2805.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-170',
    'nigdy-nie-jest-za-pozno-mistrzostwa-wilanowa-w-siatkowce-3661',
    'Nigdy nie jest za późno... Mistrzostwa Wilanowa w siatkówce',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14350/800x600_img_5153.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Jeszcze przed pandemią koronawirusa uczniowie klas 8 brali udział w Mistrzostwach Wilanowa w siatk&oacute;wce. Zajmując 2 miejsce zdobyli srebrne medale.<br />
Gratulujemy sukces&oacute;w!<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14351/img_5147.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14351/800x600_img_5147.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14352/img_5149.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14352/800x600_img_5149.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14353/img_5150.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14353/800x600_img_5150.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Nigdy nie jest za późno... Mistrzostwa Wilanowa w siatkówce',
    '',
    'https://wbs.pl/nigdy_nie_jest_za_pozno_mistrzostwa_wilanowa_w_siatkowce-3661.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-171',
    'dynia-czy-kartofeldzien-1-3376',
    'Dynia czy kartofel-Dzień 1',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13137/800x600_kartoffel_o_kurbis-74.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W dniach 7-9.10.2019r. zorganizowany został w naszej szkole projekt: &quot;Dynia czy kartofel?&quot;<br />
Skierowany był do uczni&oacute;w klas 5 i 6.<br />
<br />
<u>Poniedziałek, 7.10<br />
</u><br />
<ul>
    <li>Dowiedzieliśmy się prawie wszystkiego o tych dw&oacute;ch warzywach i to w trzech językach</li>
    <li>Wybraliśmy przepisy kulinarne, kt&oacute;re zostały wykorzystane w środę .</li>
    <li>Obliczyliśmy objętości i inne matematyczne wartości.</li>
    <li>Eksperymenty utwierdziły nas, że warto jeść te warzywa.</li>
    <li>Mini zawody sportowe zakończyły ten dzień ok. 14.30.</li>
</ul>
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13138/kartoffel_o_kurbis-26.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13138/800x600_kartoffel_o_kurbis-26.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13139/kartoffel_o_kurbis-12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13139/800x600_kartoffel_o_kurbis-12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13140/kartoffel_o_kurbis-39.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13140/800x600_kartoffel_o_kurbis-39.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13141/kartoffel_o_kurbis-88.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13141/800x600_kartoffel_o_kurbis-88.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13142/kartoffel_o_kurbis-106.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13142/800x600_kartoffel_o_kurbis-106.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13143/kartoffel_o_kurbis-138.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13143/800x600_kartoffel_o_kurbis-138.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13144/kartoffel_o_kurbis-218.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13144/800x600_kartoffel_o_kurbis-218.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13145/kartoffel_o_kurbis-253.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13145/800x600_kartoffel_o_kurbis-253.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13146/kartoffel_o_kurbis-291.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13146/800x600_kartoffel_o_kurbis-291.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13147/kartoffel_o_kurbis-296.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13147/800x600_kartoffel_o_kurbis-296.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13148/kartoffel_o_kurbis-313.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13148/800x600_kartoffel_o_kurbis-313.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13149/kartoffel_o_kurbis-384.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13149/800x600_kartoffel_o_kurbis-384.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13150/kartoffel_o_kurbis-412.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13150/800x600_kartoffel_o_kurbis-412.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13151/kartoffel_o_kurbis-468.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13151/800x600_kartoffel_o_kurbis-468.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13152/kartoffel_o_kurbis-488.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13152/800x600_kartoffel_o_kurbis-488.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13153/kartoffel_o_kurbis-484.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13153/800x600_kartoffel_o_kurbis-484.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13154/_dsc0511.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13154/800x600__dsc0511.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dynia czy kartofel-Dzień 1',
    '',
    'https://wbs.pl/dynia_czy_kartofeldzien_1-3376.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-172',
    'uroczyste-wreczenie-swiadectw-maturalnych-4001',
    'Uroczyste wręczenie świadectw maturalnych',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15898/800x600_1.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				11 czerwca odbyła się w WBS uroczystość rozdania świadectw maturalnych. W tym roku wręczał je nowy Ambasador Niemiec dr Arndt Freytag von Loringhoven. <br />
Ten wiecz&oacute;r dedykowany był młodym, wspaniałym ludziom, kt&oacute;rzy przez wiele lat tworzyli historię tej szkoły, a następnie Campusu. <br />
&bdquo;Dziękujemy Wam za aktywność i  zaangażowanie w życie szkoły i krzewienie wartości Willy&rsquo;ego Brandta. Nic i nikt nie daje nam lepszego świadectwa jak Wy - drodzy abiturienci&rdquo;.<br />
Życzymy Wam wszystkiego dobrego na nowej drodze życia!<br />
<br />
Zdjęcia: Marek Kępiński<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15899/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15899/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15900/3.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15900/800x600_3.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15901/4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15901/800x600_4.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15902/5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15902/800x600_5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15903/6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15903/800x600_6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15904/7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15904/800x600_7.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15905/8.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15905/800x600_8.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15906/9.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15906/800x600_9.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15907/10.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15907/800x600_10.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15908/11.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15908/800x600_11.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15909/12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15909/800x600_12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15910/13.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15910/800x600_13.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15911/14.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15911/800x600_14.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15912/15.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15912/800x600_15.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Uroczyste wręczenie świadectw maturalnych',
    '',
    'https://wbs.pl/uroczyste_wreczenie_swiadectw_maturalnych-4001.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-173',
    'powitanie-pierwszych-klas-2807',
    'Powitanie pierwszych klas',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/9719/800x600_1a1c_einschulung-594.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				Zdjęcia Marek Kępiński<br />
			</p>
		</div>


		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/9720/1a1c_einschulung-12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9720/800x600_1a1c_einschulung-12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9721/1a1c_einschulung-41.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9721/800x600_1a1c_einschulung-41.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9722/1a1c_einschulung-123.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9722/800x600_1a1c_einschulung-123.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9723/1a1c_einschulung-211.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9723/800x600_1a1c_einschulung-211.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9724/1a1c_einschulung-202.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9724/800x600_1a1c_einschulung-202.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9725/1a1c_einschulung-129.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9725/800x600_1a1c_einschulung-129.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9726/1a1c_einschulung-690.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9726/800x600_1a1c_einschulung-690.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9727/1a1c_einschulung-583.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9727/800x600_1a1c_einschulung-583.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9728/1a1c_einschulung-684.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9728/800x600_1a1c_einschulung-684.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9729/1a1c_einschulung-723.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9729/800x600_1a1c_einschulung-723.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9730/1a1c_einschulung-733.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9730/800x600_1a1c_einschulung-733.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9731/1a1c_einschulung-615.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9731/800x600_1a1c_einschulung-615.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9732/1a1c_einschulung-759.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9732/800x600_1a1c_einschulung-759.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9733/1a1c_einschulung-434.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9733/800x600_1a1c_einschulung-434.jpg);">
			</a>
		</div>
		
	
</div>

		<a href="archiwum-1589.html" title="Archiwum" class="btn btn-default">Powrót do listy</a>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Powitanie pierwszych klas',
    '',
    'https://wbs.pl/powitanie_pierwszych_klas-2807.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-174',
    'jugend-debattiert-4016',
    'Jugend debattiert',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/16035/800x600_clipboard02.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Taruna Jung i Igor Wydrzyński-Głowacki zakwalifikowali się w tym roku do p&oacute;łfinału <em>Jugend debattiert.</em> Obydwoje dotarli do finału, w kt&oacute;rym Igor zajął trzecie miejsce, a Taruna pierwsze i tym samym zwyciężyli w klasyfikacji generalnej konkursu <em>Jugend debattiert Polska 2021!</em> <br />
Gratulujemy tak dobrego występu! <br />
Taruna będzie teraz reprezentować naszą szkołę w międzynarodowym konkursie w Czechach.<br />
<br />
Zainteresowani mogą obejrzeć finałową debatę ponownie w Internecie:<br />
<br />
<a href="https://www.youtube.com/watch?v=z_luXxDRUC0 ">https://www.youtube.com/watch?v=z_luXxDRUC0 </a><br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/16036/igortaruna.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16036/800x600_igortaruna.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Jugend debattiert',
    '',
    'https://wbs.pl/jugend_debattiert-4016.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-175',
    'kreatywnie-przeciw-koronawirusowi-prace-uczniow-wbs-4019',
    'Kreatywnie przeciw koronawirusowi. Prace uczniów WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/16048/800x600_image00007.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				7 Monate lang mussten sich unsere Sch&uuml;lerinnen und Sch&uuml;ler auf den Fernunterricht umstellen. Das Leben und alle Schulprojekte wurden in die virtuelle Welt gebracht. Wir k&ouml;nnen Ihnen nur einen Teil von der Kreativit&auml;t der jungen Menschen zeigen, die keine Grenzen kennt.<br />
Wir laden Sie zur Fotogalerie ein.<br />
<br />
Auf den Fotos sind folgende Projekte vorhanden: Haustiere, Umweltschutz und Technikethik<br />
<br />
<strong><span style="color: rgb(0, 128, 128);"><em><span style="font-size: medium;"><br />
&bdquo;Als Kind ist jeder ein K&uuml;nstler. Die Schwierigkeit liegt darin, als Erwachsener einer zu bleiben.&rdquo;<br />
<br />
Pablo Picasso<br />
</span></em></span></strong><br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/16047/image00001.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16047/800x600_image00001.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16049/image00006.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16049/800x600_image00006.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16050/image00008.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16050/800x600_image00008.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16051/image00009.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16051/800x600_image00009.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16052/image00010.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16052/800x600_image00010.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16054/clipboard02.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16054/800x600_clipboard02.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16055/clipboard022.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16055/800x600_clipboard022.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16056/img_20210708_124151.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16056/800x600_img_20210708_124151.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16057/img_20210708_124200.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16057/800x600_img_20210708_124200.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16058/img_20210708_124213.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16058/800x600_img_20210708_124213.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16059/8a,_emilie_livingstone,_zeichung,_technikethik-1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16059/800x600_8a,_emilie_livingstone,_zeichung,_technikethik-1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16060/8a,_filip_blazeczek,_zeichnung,_technikethik.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16060/800x600_8a,_filip_blazeczek,_zeichnung,_technikethik.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16061/8a,_samira_edikhanova,_zeichnung_technikethik.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16061/800x600_8a,_samira_edikhanova,_zeichnung_technikethik.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/16062/8a,_thomas_jasiewicz,_zeichnung_technikethik.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/16062/800x600_8a,_thomas_jasiewicz,_zeichnung_technikethik.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Kreatywnie przeciw koronawirusowi. Prace uczniów WBS',
    '',
    'https://wbs.pl/kreatywnie_przeciw_koronawirusowi_prace_uczniow_wbs-4019.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-176',
    'zyczenia-ambasady-republiki-federalnej-niemiec-z-okazji-100-rocznicy-odzyskania-niepodleglosci-przez-polske-2866',
    'Życzenia Ambasady Republiki Federalnej Niemiec z okazji 100 rocznicy odzyskania niepodległości przez Polskę',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/10136/800x600_niepodleglosc.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				<a href="https://www.facebook.com/314120095328810/posts/2246280215446112" target="_blank">www.facebook.com/314120095328810/posts/2246280215446112</a><br />
			</p>
		</div>


		
		<a href="archiwum-1589.html" title="Archiwum" class="btn btn-default">Powrót do listy</a>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Życzenia Ambasady Republiki Federalnej Niemiec z okazji 100 rocznicy odzyskania niepodległości przez Polskę',
    '',
    'https://wbs.pl/zyczenia_ambasady_republiki_federalnej_niemiec_z_okazji_100_rocznicy_odzyskania_niepodleglosci_przez_polske-2866.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-177',
    'z-wizyta-w-ksiegarni-3385',
    'Z wizytą w księgarni',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13207/800x600_img_2585.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Dwa niezwykłe literackie spotkania odbyły się we wrześniu w księgarni dla dzieci i młodzieży Badet. Nasi uczniowie z klas piątych i sz&oacute;stych mieli okazję uczestniczyć w tym wydarzeniu.  <br />
<br />
Gościem jednego ze spotkań był<strong> Łukasz Wierzbicki </strong>-znany i  lubiany autor książek podr&oacute;żniczo- przygodowych, w tym chętnie czytanej przez naszych uczni&oacute;w &bdquo;Afryki Kazika&rdquo;. Tym razem  pisarz zafascynował wszystkich barwną opowieścią o Olku Dobie i jego zuchwałym rejsie przez Atlantyk, kt&oacute;ry opisał w książce pod tytułem &bdquo;Ocean to pikuś&rdquo; <br />
<br />
Bohaterką drugiego spotkania była <strong>Karolina Maria Piekarska</strong> - autorka bestsellerowej powieści dla młodzieży pt. &bdquo;Klasa pani Czajki&rdquo;. Wielu sz&oacute;stoklasist&oacute;w z zainteresowaniem słuchało wybranych historii o przygodach warszawskich gimnazjalist&oacute;w, ich pierwszych miłościach, przyjaźniach czy kłopotach z nauczycielami.  <br />
<br />
Po tych spotkaniach zostało nam tylko ... sięgnąć po wybraną książkę i zanurzyć się w świat przyg&oacute;d powieściowych bohater&oacute;w. <br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13208/img_2547.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13208/800x600_img_2547.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13209/img_2551.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13209/800x600_img_2551.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13210/img_2552.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13210/800x600_img_2552.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13211/img_2557.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13211/800x600_img_2557.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13212/img_2568.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13212/800x600_img_2568.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13213/img_2570.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13213/800x600_img_2570.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13214/img_2574.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13214/800x600_img_2574.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13215/img_2578.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13215/800x600_img_2578.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13216/img_2580.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13216/800x600_img_2580.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Z wizytą w księgarni',
    '',
    'https://wbs.pl/z_wizyta_w_ksiegarni-3385.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-178',
    'akademia-muzyczna-wbs-online-lekcje-gry-na-instrumencie-3599',
    'Akademia Muzyczna WBS ONLINE - Lekcje gry na instrumencie',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14175/800x600_strona_www.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice,<br />
<br />
zapraszamy uczni&oacute;w na lekcje gry na instrumencie - online !!!!<br />
<br />
Skończył się marzec, a tym samym kolejny miesiąc działalności Akademii Muzycznej WBS. W tej wyjątkowej dla wszystkich sytuacji działamy dalej.<br />
<br />
Zawieszenie zajęć stacjonarnych w szkole dało możliwość nauczycielom Akademii Muzycznej podjęcia inicjatywy prowadzenia lekcji online. W porozumieniu z panią Aldoną Orman takie zajęcia Akademia Muzyczna WBS postanowiła rozpocząć.<br />
<br />
Z radością informujemy, że trwające od 2 tygodni zajęcia online cieszą się ogromną popularnością. <br />
Zapraszamy wszystkich chętnych!!! <br />
Czekamy na WAS!!!<br />
<br />
<br />
Dyrektor Akademii Muzycznej WBS<br />
Marcin Lemiszewski<br />
<br />
<img src="/pub/uploader/images/Logo_nowe_obraz.jpg" alt="Logo_nowe_obraz.jpg" width="107" height="107" /><br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14158/levin_2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14158/800x600_levin_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14159/alex2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14159/800x600_alex2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14160/drums1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14160/800x600_drums1.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Akademia Muzyczna WBS ONLINE - Lekcje gry na instrumencie',
    '',
    'https://wbs.pl/akademia_muzyczna_wbs_online__lekcje_gry_na_instrumencie-3599.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-179',
    'nigdy-nie-jest-za-poznoogolnopolski-konkurs-jezyka-niemieckiego-deutschfreund-3662',
    'Nigdy nie jest za późno...Ogólnopolski Konkurs Języka Niemieckiego "Deutschfreund"',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14354/800x600_unnamed.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Zdobywczynią pierwszego miejsca w Og&oacute;lnopolskim Konkursie Języka Niemieckiego: &quot;Deutschfreund&quot;  została Helena Lanz, uczennica klasy 5c.<br />
W konkursie tym wzięło udział ok. 20.000 uczni&oacute;w szk&oacute;ł podstawowych z całej Polski.<br />
<br />
Serdecznie gratulujemy!<br />
<br />
<div style="text-align: center;"><img src="/pub/uploader/images/20200207_101313a.jpg" alt="20200207_101313a.jpg" width="500" height="667" /></div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Nigdy nie jest za późno...Ogólnopolski Konkurs Języka Niemieckiego "Deutschfreund"',
    '',
    'https://wbs.pl/nigdy_nie_jest_za_poznoogolnopolski_konkurs_jezyka_niemieckiego_deutschfreund-3662.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-180',
    'dzien-kropki-3336',
    'Dzień Kropki',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/12943/800x600_punktetag19-1004.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/12942/punktetag19-1074.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12942/800x600_punktetag19-1074.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12941/punktetag19-1081.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12941/800x600_punktetag19-1081.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12944/punktetag19-1084.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12944/800x600_punktetag19-1084.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12945/punktetag19-1048.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12945/800x600_punktetag19-1048.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12946/punktetag19-866.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12946/800x600_punktetag19-866.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12947/punktetag19-877.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12947/800x600_punktetag19-877.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12948/punktetag19-884.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12948/800x600_punktetag19-884.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12949/punktetag19-996.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12949/800x600_punktetag19-996.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12950/punktetag19-911.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12950/800x600_punktetag19-911.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12951/punktetag19-923.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12951/800x600_punktetag19-923.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12952/punktetag19-935.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12952/800x600_punktetag19-935.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12953/punktetag19-953.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12953/800x600_punktetag19-953.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12954/punktetag19-959.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12954/800x600_punktetag19-959.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12955/punktetag19-992.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12955/800x600_punktetag19-992.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12956/punktetag19-1064.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12956/800x600_punktetag19-1064.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12957/punktetag19-1087.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12957/800x600_punktetag19-1087.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/12958/punktetag19-1089.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/12958/800x600_punktetag19-1089.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Dzień Kropki',
    '',
    'https://wbs.pl/dzien_kropki-3336.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-181',
    'mimo-pandemii-muzyka-gra-online-dalej-3645',
    'Mimo pandemii muzyka gra (ONLINE) dalej...',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14300/800x600_operkammer1.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div>Nasi nauczyciele poza pracą w WBS - Willy Brandt Schule Warschau są aktywni r&oacute;wnież w wielu instytucjach kulturalnych. Chociaż pandemia koronawirusa ograniczyła ich działalność, oni nadal starają się robić to, co lubią i czym żyją. Nasza nauczycielka muzyki w WBS&nbsp;i Akademii Muzycznej WBS śpiewa w Warszawskiej Operze Kameralnej.<br />
Spr&oacute;bujcie ją znaleźć na tych wyjątkowych koncertach!</div>
<br />
<iframe src="https://www.youtube.com/embed/kpU7nOU9wl4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
<br />
<iframe src="https://www.youtube.com/embed/21Tj1KSkpQ4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Mimo pandemii muzyka gra (ONLINE) dalej...',
    '',
    'https://wbs.pl/mimo_pandemii_muzyka_gra_online_dalej-3645.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-182',
    'spokojnych-swiat-wielkanocnych-3946',
    'Spokojnych Świąt Wielkanocnych',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15601/800x600_birds-nest-2121590_640.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: center;"><span style="font-family: Comic Sans MS;">W imieniu całego zespołu WBS życzę Państwu i Państwa dzieciom, aby w czasie Świąt Wielkanocnych oraz ferii  nabrać dystansu do bieżących wyzwań i czerpać z tego siłę do dalszej wsp&oacute;lnej pracy nad realizacją zadań <br />
Campusu Willy&lsquo;ego Brandta.<br />
<br />
W imieniu Campusu Willy&rsquo;ego Brandta<br />
<br />
Mechthild Hinsberger-Boguski<br />
<br />
Dyrektor Szkoły </span><br />
<br />
<br />
<img src="/pub/uploader/images/WBS_Ostern21.png" alt="WBS_Ostern21.png" width="610" height="488" /></div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Spokojnych Świąt Wielkanocnych',
    '',
    'https://wbs.pl/spokojnych_swiat_wielkanocnych-3946.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-183',
    'most-szkolny-w-weimarze-2020-3750',
    'Most szkolny w Weimarze 2020',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14781/800x600_img_0123.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W dniach 18-25 września przebywaliśmy wraz z p. Petrą St&uuml;we w Weimarze na międzynarodowym spotkaniu &quot;Most szkolny w Weimarze&quot;. Nasza 4-osobowa grupa składająca się z uczni&oacute;w i uczennic klasy 11 uczestniczyła w r&oacute;żnych panelach dyskusyjnych, podczas kt&oacute;rych w wraz z innymi uczniami z Niemiec i Polski wymienialiśmy się poglądami i wiedzą. W ciągu tego tygodnia braliśmy udział w&nbsp; 4 warsztatach, wykładach, odwiedzaliśmy muzea i inne warte zobaczenia miejsca. <br />
Tematem przewodnim tego wydarzenia było &quot;Inne życie - lata dwudzieste i poszukiwanie innego świata&quot;, kt&oacute;remu towarzyszyły liczne warsztaty np: z kreatywnegop pisania, teatralne, debaty filozoficzne oraz dziennikarskie. Pod koniec tygodnia zaprezentowaliśmy nasze wyniki pozostałym grupom. <br />
&quot;Most szkolny&quot; był nie tylko okazją do nawiązania nowych przyjaźni i odwiedzenia nowego miasta, ale także sposobem na dalszą edukację. <br />
Jesteśmy bardzo wdzięczni za możliwość wzięcia udziału w tym spotkaniu i z pewnością na długo zostanie ono w naszej pamięci. <br />
<br />
Taruna Jung, klasa 11<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14782/img_0139.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14782/800x600_img_0139.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14783/img_0211.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14783/800x600_img_0211.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14784/img_0216.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14784/800x600_img_0216.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14785/img_0237.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14785/800x600_img_0237.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14786/img_0143a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14786/800x600_img_0143a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14787/img_0147a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14787/800x600_img_0147a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14788/img_0228a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14788/800x600_img_0228a.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Most szkolny w Weimarze 2020',
    '',
    'https://wbs.pl/most_szkolny_w_weimarze_2020-3750.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-184',
    'rozstrzygniecie-konkursu-na-logo-campusu-im-willyego-brandta-3502',
    'Rozstrzygnięcie konkursu na logo Campusu im. Willy''ego Brandta',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13763/800x600_gewinner.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W dniu 07.10.19 został ogłoszony konkurs rodzinny na stworzenie graficznego logo dla Campusu im. Willy''ego Brandta.<br />
<br />
Celem konkursu było stworzenie wraz z rodziną charakterystycznego symbolu naszego Campusu zawierającego w sobie wszystkie jednostki.<br />
<br />
Podczas bożonarodzeniowego kiermaszu 7 grudnia, w foyer Szkoły Willy''ego Brandta zostało wystawionych 12 nadesłanych prac, aby jeszcze bardziej zwiększyć emocje.Tuż przed konceremt świątecznym oficjalnie przedstawiono zwycięzcę: Niko Oremus.<br />
<br />
Zarząd NTS pragnie skorzystać z okazji, aby podziękować wszystkim uczestnikom za ich wysiłek i zaangażowanie, a także naszemu sponsorowi, firmie BFC, za gł&oacute;wną nagrodę, kt&oacute;rą jest rodzinny weekend w Hotelu Bonifacio.<br />
<br />
Ostateczna wersja logo Campusu zostanie przedstawiona w nowym roku 2020.<br />
<br />
Zapraszamy do obejrzenia nadesłanych prac. <br />
<br />
Na zdjęciu gł&oacute;wnym: zwycięzca<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13764/clipboard01.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13764/800x600_clipboard01.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13765/clipboard02.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13765/800x600_clipboard02.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13766/clipboard03.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13766/800x600_clipboard03.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13767/clipboard04.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13767/800x600_clipboard04.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13768/clipboard05.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13768/800x600_clipboard05.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13769/clipboard06.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13769/800x600_clipboard06.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13770/clipboard07.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13770/800x600_clipboard07.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13771/clipboard08.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13771/800x600_clipboard08.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13772/1_logo_campus_kolor.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13772/800x600_1_logo_campus_kolor.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13773/logo_campus_300dpi.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13773/800x600_logo_campus_300dpi.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13774/20191116125342_00001.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13774/800x600_20191116125342_00001.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13775/clipboard01.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13775/800x600_clipboard01.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13776/bfc_travel_logo.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13776/800x600_bfc_travel_logo.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'sukcesy'),
    'published',
    NULL,
    'Rozstrzygnięcie konkursu na logo Campusu im. Willy''ego Brandta',
    '',
    'https://wbs.pl/rozstrzygniecie_konkursu_na_logo_campusu_im_willyego_brandta-3502.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-185',
    'jugend-musiziert-regionalwettbewerb-3526',
    'Jugend musiziert – Regionalwettbewerb',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13852/800x600_wbs_jumu-31.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Dużym sukcesem zakończyliśmy muzyczny konkurs regionalny &bdquo;Jugend musiziert&rdquo;, kt&oacute;ry odbył się 16.01.2020 roku w auli naszej szkoły.<br />
Wzięło w nim udział 34 uczestnik&oacute;w i obejrzeliśmy 29 występ&oacute;w. <br />
Kategorie: fortepian solo, śpiew solo, duet wokalny (pop), perkusja (pop) oraz gitara elektryczna (pop). <br />
Wyniki: Jury (w składzie: Pani Biermann, pani Tippe, pani Wr&oacute;bel, pan Stubbe) przyznało wszystkim uczestnikom I , II i III nagrody, z czego wielu uczni&oacute;w zostało wyr&oacute;żnionych i zgłoszonych do kolejnego etapu konkursu, kt&oacute;ry odbędzie się tym razem w naszej szkole w marcu ( 18-23.03.2020). <br />
Jury złożone z uczni&oacute;w (Barbara Grątkowska, Antoni Descur, Nina Hartmann i Julia Kellner) przyznało r&oacute;wnież 6 nagr&oacute;d specjalnych dla najlepszych uczestnik&oacute;w w danej kategorii.<br />
Gratulacje dla wszystkich!!!<br />
<br />
<br />
Nauczyciel muzyki<br />
Marcin Lemiszewski <br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13851/jumupl-170-620.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13851/800x600_jumupl-170-620.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13853/wbs_jumu-32.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13853/800x600_wbs_jumu-32.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13854/wbs_jumu-36.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13854/800x600_wbs_jumu-36.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13855/wbs_jumu-73.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13855/800x600_wbs_jumu-73.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13856/wbs_jumu-131.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13856/800x600_wbs_jumu-131.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13857/wbs_jumu-152.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13857/800x600_wbs_jumu-152.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13858/wbs_jumu-202.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13858/800x600_wbs_jumu-202.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13859/wbs_jumu-231.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13859/800x600_wbs_jumu-231.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13860/wbs_jumu-246.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13860/800x600_wbs_jumu-246.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13861/wbs_jumu-252.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13861/800x600_wbs_jumu-252.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13865/wbs_jumu-385.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13865/800x600_wbs_jumu-385.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13866/wbs_jumu-415.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13866/800x600_wbs_jumu-415.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13867/jumupl-13-210.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13867/800x600_jumupl-13-210.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13868/jumupl-30-260.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13868/800x600_jumupl-30-260.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13869/jumupl-60-459.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13869/800x600_jumupl-60-459.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13870/jumupl-65-311.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13870/800x600_jumupl-65-311.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13871/jumupl-88-506.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13871/800x600_jumupl-88-506.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13872/jumupl-122-568.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13872/800x600_jumu',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Jugend musiziert – Regionalwettbewerb',
    '',
    'https://wbs.pl/jugend_musiziert___regionalwettbewerb-3526.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-186',
    'wspanialy-swiat-organizmow-jednokomorkowych-projekt-klas-7a-i-7c-3925',
    'Wspaniały świat organizmów jednokomórkowych. Projekt klas 7a i 7c',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15532/800x600_www1.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice i Uczniowie, <br />
<br />
zapraszamy do obejrzenia galerii pięknych tr&oacute;jwymiarowych modeli kom&oacute;rek i plakat&oacute;w o świecie oranizm&oacute;w jednokom&oacute;rkowych. Prace przygotowali uczniowie klas 7a i 7c pod opieką Pani Orłowskiej. <br />
<br />
<a href="http:// padlet.com/korlowska1/h597k6sazk9s5y3q">padlet.com/korlowska1/h597k6sazk9s5y3q </a><br />
<br />
Głosujcie, komentujcie i ...motywujcie :) <img src="https://wbs.pl/cms/class/extends/fckeditor/editor/images/smiley/msn/thumbs_up.gif" alt="" /><br />
<br />
<br />
<br />
<br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Wspaniały świat organizmów jednokomórkowych. Projekt klas 7a i 7c',
    '',
    'https://wbs.pl/wspanialy_swiat_organizmow_jednokomorkowych_projekt_klas_7a_i_7c-3925.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-187',
    'nabozenstwo-ekumeniczne-3587',
    'Nabożeństwo ekumeniczne',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14098/800x600_clipboard02.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<div style="text-align: left;">Drodzy Rodzice i Uczniowie WBS,<br />
<br />
dzisiaj, w dniu 2.4.20, odbyłoby się nasze szkolne nabożeństwo ekumeniczne. Chcieliśmy spotkać się podczas Wielkiego Postu w Świątyni Opatrzności Bożej i upamiętnić Wielki Tydzień i czas Wielkanocy. Mamy nadzieję, że wkr&oacute;tce będziemy mogli nadrobić zaległości.<br />
<br />
Z pełnym przekonaniem, że wkr&oacute;tce&nbsp;się spotkamy , pozdrawiamy Państwa z WBS oraz z niemieckich wsp&oacute;lnot protestanckich i katolickich.<br />
<br />
Mechthild Hinsberger-Boguski<br />
Dyrektor Szkoły</div>
<div style="text-align: center;"><br />
&nbsp;</div>
<img src="/pub/uploader/images/Es_gibt_eine_Hoffnung__Jest_nadzieja2.png" alt="Es_gibt_eine_Hoffnung__Jest_nadzieja2.png" width="800" height="1131" /><br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nabożeństwo ekumeniczne',
    '',
    'https://wbs.pl/nabozenstwo_ekumeniczne-3587.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-188',
    'online-zajecia-w-akademii-muzycznej-3624',
    'ONLINE zajęcia w Akademii Muzycznej',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14200/800x600_www2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drogie uczennice i uczniowie, <br />
tuż po feriach wracamy do zajęć muzycznych ONLINE w Akademii Muzycznej WBS.<br />
Muzyka sprawia radość!<br />
Czekamy na was :-))<br />
<br />
Dyrektor Akademii Muzycznej WBS<br />
Marcin Lemiszewski<br />
<br />
<img src="/pub/uploader/images/Logo_nowe_obraz.jpg" alt="Logo_nowe_obraz.jpg" width="100" height="100" /><br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14201/img_20200325_180944.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14201/800x600_img_20200325_180944.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14202/img_20200408_164823.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14202/800x600_img_20200408_164823.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14203/projekt_bez_tytulu.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14203/800x600_projekt_bez_tytulu.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14204/img_20200404_124422.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14204/800x600_img_20200404_124422.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'ONLINE zajęcia w Akademii Muzycznej',
    '',
    'https://wbs.pl/online_zajecia_w_akademii_muzycznej-3624.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-189',
    'rnt-konferencja-w-pradze-10-12102019-3401',
    'RNT – Konferencja w Pradze 10–12.10.2019',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13347/800x600_europatagung.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				&quot;Granice języka są granicami mojego świata&quot; - cytat Ludwiga Wittgensteina był tematem konferencji Regional Netzwerktagung (RNT) regionu Europy Środkowo-Wschodniej w nowym Centrum ReFo przy DS Praga. Administratorzy szk&oacute;ł, zarząd i kierownictwo administracyjne omawiali kwestie skutecznej edukacji językowej w warunkach wielojęzyczności. Centralnym punktem odniesienia były nowe ramy orientacyjne dotyczące jakości szk&oacute;ł. Poza możliwościami wdrożeniowymi w każdej szkole, dyskusje koncentrowały się na dalszej wsp&oacute;łpracy regionalnej w celu opracowania wsp&oacute;lnej strategii marketingowej.<br />
Przyjęcie w ambasadzie niemieckiej było z pewnością jednym z najważniejszych punkt&oacute;w programu wspierającego ze względu na szczeg&oacute;lną rolę, jaką Ambasada Praska odegrała w otwarciu granicy 30 lat temu.<br />
<br />
Źr&oacute;dło: Constanze Creutzburg<br />
<br />
W&nbsp;konferencji wzięli udział Pani Mechthild Hinsberger-Boguski (dyrektor WBS) i Pan Philip Mierzwa (pełnomocnik zarządu NTS).<br />
<br />
<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'RNT – Konferencja w Pradze 10–12.10.2019',
    '',
    'https://wbs.pl/rnt___konferencja_w_pradze_10_12102019-3401.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-190',
    'spotkanie-z-pisarka-joanna-rudnianska-3768',
    'Spotkanie z pisarką Joanną Rudniańską',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14806/800x600_img_5902.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				23 września uczniowie klas si&oacute;dmych, miłośnicy Kotki Brygidy,  mieli okazję spotkać się z pisarką Joanną Rudniańską, laureatką wielu nagr&oacute;d literackich, autorką książek dla dzieci i młodzieży. Spotkanie było okazją do zadawania pytań związanych z fabułą lubianej i chętnie czytanej przez naszą młodzież Kotki Brygidy, a także do rozm&oacute;w o tolerancji i stereotypach.  <br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14805/img_5909.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14805/800x600_img_5909.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14804/img_20200923_101002.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14804/800x600_img_20200923_101002.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14807/img_5906.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14807/800x600_img_5906.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14809/img_5914.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14809/800x600_img_5914.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14810/img_5913.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14810/800x600_img_5913.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14811/img_20200923_101017.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14811/800x600_img_20200923_101017.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14812/img_5918.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14812/800x600_img_5918.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14813/img_20200923_101059.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14813/800x600_img_20200923_101059.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Spotkanie z pisarką Joanną Rudniańską',
    '',
    'https://wbs.pl/spotkanie_z_pisarka_joanna_rudnianska-3768.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-191',
    'kalendarz-adwentowy-wbs-3817',
    'Kalendarz adwentowy WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14966/800x600_www.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Choć niestety nie możemy w tym roku udekorować budynku szkoły, a tym bardziej klas online, spr&oacute;bujemy jednak inaczej wyczarować trochę świątecznej atmosfery 🎄🌈 🎀 🎁 🎇 🎆 🌠. <br />
Zobaczcie, jak nasza społeczność szkolna WBS - Willy Brandt Schule Warschau<br />
tworzy wsp&oacute;lny, cyfrowy kalendarz adwentowy: 👉 <a href="https://calendar.myadvent.net/?id=5281b598c5df4dc9280a6cb9b6b0b808">https://calendar.myadvent.net/?id=5281b598c5df4dc9280a6cb9b6b0b808</a><br />
<br />
Każdego dnia otwieramy dla was jedno okienko - bądzcie z nami!<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14967/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14967/800x600_1.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14970/2.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14970/800x600_2.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15151/3a.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15151/800x600_3a.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14973/4.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14973/800x600_4.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15145/5.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15145/800x600_5.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15146/6.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15146/800x600_6.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15147/7.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15147/800x600_7.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15148/8.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15148/800x600_8.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15149/9.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15149/800x600_9.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15150/10.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15150/800x600_10.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15165/11.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15165/800x600_11.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15166/12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15166/800x600_12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15167/13.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15167/800x600_13.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15168/14.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15168/800x600_14.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15169/15.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15169/800x600_15.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15175/16.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15175/800x600_16.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15176/17.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15176/800x600_17.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15208/18.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15208/800x600_18.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15209/19.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15209/800x600_19.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15210/20.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15210/800x600_20.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15211/21.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15211/800x600_21.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15212/22.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15212/800x600_22.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Kalendarz adwentowy WBS',
    '',
    'https://wbs.pl/kalendarz_adwentowy_wbs-3817.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-192',
    'akademia-pilkarska-wbs-warszawa-trenuje-online-3603',
    'Akademia Piłkarska WBS Warszawa trenuje ONLINE!',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14167/800x600_online_fa2.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Drodzy Rodzice, Zawodniczki i Zawodnicy,<br />
<br />
w związku z epidemią koronawirusa w Polsce sztab szkoleniowy Akademii Piłkarskiej WBS Warszawa zdecydował, że Akademia Piłkarska WBS Warszawa przechodzi w tryb Online.<br />
W okresie kwarantanny czekają na Was treningi techniki, motoryki, analizy taktyczne, wsp&oacute;lne przygotowywanie koktajli energetycznych, treningi regeneracyjne oraz wiele innych inspirujących materiał&oacute;w &ndash; zobaczcie sami:<br />
<br />
<br />
<a href="https://youtu.be/Hv5MbaLWtxY">https://youtu.be/Hv5MbaLWtxY</a><br />
<br />
<br />
Życzymy dużo zdrowia!<br />
<br />
Akademia Piłkarska WBS Warszawa<br />
<br />
<br />
<img src="/pub/uploader/images/logowbs.png" alt="logowbs.png" width="100" height="100" /><br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Akademia Piłkarska WBS Warszawa trenuje ONLINE!',
    '',
    'https://wbs.pl/akademia_pilkarska_wbs_warszawa_trenuje_online_-3603.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-193',
    'ponowne-otwarcie-szkoly-3664',
    'Ponowne otwarcie szkoły',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14358/800x600_img_20200520_173103.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Szanowni Rodzice,  <br />
decyzją Rządu Rzeczypospolitej Polski od 25.05.2020 rozpoczynają się w polskich szkołach zajęcia opiekuńczo-wychowawcze dla uczni&oacute;w klas 1-3.  Przedszkole Niemieckie, kt&oacute;re znajduje się w oddzielnym budynku, będzie mogło wznowić swoją działalność od tego dnia, z zachowaniem ścisłych zasad higieny. Otwarcie szkoły dla klas 1-3 może nastąpić dopiero od 8.6.2020. Jest to związane z przeprowadzeniem w szkole w pierwszym tygodniu czerwca ustnych egzamin&oacute;w w ramach niemieckiej matury międzynarodowej. Egzaminy te mogą się odbyć na podstawie specjalnego zezwolenia uzyskanego od polskiego Ministerstwa Edukacji Narodowej. W myśl konsultacji z polskim MEN należy wykluczyć wszelkie ryzyko, kt&oacute;re mogłoby zagrozić realizacji egzamin&oacute;w maturalnych. <br />
Z wielu osobistych rozm&oacute;w wiem, że dzieci i rodzice nie życzą sobie niczego innego, jak tylko powrotu do normalnego, codziennego życia, w tym uczęszczania do szkoły. Niestety sytuacja epidemiczna nie pozwala jeszcze na takie rozwiązanie. <br />
Kierownictwo szkoły podstawowej, Pani Diana Senman i Pani Ewa Wojnarska niebawem prześlą Państwu ankietę dotyczącą korzystania z zajęć opiekuńczo-wychowawczych oraz zasady higieny obowiazujące od 08.06.2020.<br />
<br />
<u>W załączniku znajdą Państwo dokument dotyczący zasady higieny oraz korzystania z budynku po ponownym otwarciu szkoły.</u><br />
<br />
Z g&oacute;ry dziękuję za zrozumienie i przesyłam Państwu serdeczne pozdrowienia z WBS.<br />
<br />
			</p>

			<div class="table-responsive download">
	<h3>
		<i class="fa fa-download"></i>Dokumenty do pobrania: 
	</h3>
	<table class="table table-hover">
		<tbody>
						<tr>
				<td>
					Zasady higieny i korzystania z budynku 
				</td>
				<td>
					<a href="pub/cms/files/1328/zasady_higieny_oraz_korzystania_z_budynku_po_ponownym_otwarciu_szkoly.pdf" title="Zasady higieny i korzystania z budynku " target="_blank">pobierz <i class="fa fa-arrow-down"></i>
</a>
				</td>
			</tr>
					</tbody>
	</table>
</div>
		</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Ponowne otwarcie szkoły',
    '',
    'https://wbs.pl/ponowne_otwarcie_szkoly-3664.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-194',
    'bazar-adwentowy-turniej-i-koncert-bozonarodzeniowy-w-campusie-willyego-brandta-3493',
    'Bazar adwentowy, turniej i koncert bożonarodzeniowy w Campusie Willy''ego Brandta',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13672/800x600_advetbasar-482.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<em><strong>Jedna osoba nie może unieść dachu. </strong></em><br />
powiedzenie afrykańskie<br />
<br />
W imieniu dyrekcji chciałabym podziękować serdecznie wszystkim, kt&oacute;rzy przyczynili się do sukcesu bazaru adwentowego i koncertu bożonarodzeniowego. Dziękuję r&oacute;wnież wszystkim tym, kt&oacute;rzy spędzili sobotnie popołudnie i wiecz&oacute;r w szkole WBS.<br />
Szczeg&oacute;lne podziękowania kieruję do nauczycieli muzyki, nauczycieli plastyki, do działu technicznego, dyrekcji szkoły podstawowej i rodzic&oacute;w, kt&oacute;rzy wiele godzin pracy poświęcili  na wspaniałe przygotowanie tego wieczoru pod względem technicznym, kulinarnych i muzycznym. <br />
Wszyscy widziliśmy jak wiele radości sprawiało uczniom wsp&oacute;lne śpiewanie i muzykowanie oraz jak dumni byli ze sprzedaży własnoręcznie wykonanych dekoracji świątecznych.<br />
Dziękuję za włączenie się do wsp&oacute;lnej akcji charytatywnej oraz wspieranie naszego &bdquo;Dachu&quot; WBS.<br />
<br />
<br />
Mechthild Hinsberger-Boguski<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13673/advetbasar-144.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13673/800x600_advetbasar-144.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13674/advetbasar-159.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13674/800x600_advetbasar-159.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13675/advetbasar-191.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13675/800x600_advetbasar-191.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13676/advetbasar-211.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13676/800x600_advetbasar-211.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13677/advetbasar-232.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13677/800x600_advetbasar-232.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13678/advetbasar-239.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13678/800x600_advetbasar-239.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13679/advetbasar-245.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13679/800x600_advetbasar-245.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13680/advetbasar-451.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13680/800x600_advetbasar-451.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13681/advetbasar-450.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13681/800x600_advetbasar-450.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13682/advetbasar-452.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13682/800x600_advetbasar-452.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13683/advetbasar-499.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13683/800x600_advetbasar-499.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13684/advetbasar-529.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13684/800x600_advetbasar-529.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13685/advetbasar-594.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13685/800x600_advetbasar-594.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13686/advetbasar-725.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13686/800x600_advetbasar-725.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13687/advetbasar-947.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13687/800x600_advetbasar-947.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13688/advent_turniej-12.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13688/800x600_advent_turniej-12.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13689/advent_turniej-17.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13689/800x600_advent_turniej-17.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Bazar adwentowy, turniej i koncert bożonarodzeniowy w Campusie Willy''ego Brandta',
    '',
    'https://wbs.pl/bazar_adwentowy_turniej_i_koncert_bozonarodzeniowy_w_campusie_willyego_brandta-3493.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-195',
    'ferie-zimowe-z-programem-oto-szczesliwi-geniusze-3906',
    'Ferie zimowe z programem "Oto Szczęśliwi geniusze"',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/15483/800x600_szczesliwi_geniusze,.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W czasie ferii zimowych w szkole odbyły się p&oacute;łkolonie według programu &quot;Oto Szczęśliwi Geniusze&quot;. Program jest realizowany w naszej szkole od 2015 roku jako zajęcia dodatkowe. W tym roku po raz pierwszy został zrealizowany w formie całodziennych zajęć w trakcie przerwy zimowej.<br />
<br />
Celem programu jest nauka koncentracji, uważności podczas proces&oacute;w zespołowych, gier i zabaw, a także wzrost odpowiedzialności oraz rozwijanie samoświadomości uczestnik&oacute;w. Dzieci, wsp&oacute;lnie wykonując ćwiczenia, uczą się wsp&oacute;łpracować i wspierać się wzajemnie. Rozwijane są także umiejętności liderskie oraz samoocena.<br />
<br />
Więcej informacji o zajęciach znajdą Państwo <a href="https://www.wbs.pl/szczesliwi_geniusze-3033.html">tutaj</a>. <br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/15484/8d8d1b06-0872-4d4f-96ff-98907e11001c.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15484/800x600_8d8d1b06-0872-4d4f-96ff-98907e11001c.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15485/54bbcf05-5d39-4dd7-9d0d-4232a9c61640.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15485/800x600_54bbcf05-5d39-4dd7-9d0d-4232a9c61640.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15486/77d15096-af30-4989-9513-59d4d86c2719.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15486/800x600_77d15096-af30-4989-9513-59d4d86c2719.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15487/aacf2bde-17f3-4043-817d-2488575abae9.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15487/800x600_aacf2bde-17f3-4043-817d-2488575abae9.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/15488/ec9356b7-d1f0-4f72-8b1b-767262ae74f0.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/15488/800x600_ec9356b7-d1f0-4f72-8b1b-767262ae74f0.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Ferie zimowe z programem "Oto Szczęśliwi geniusze"',
    '',
    'https://wbs.pl/ferie_zimowe_z_programem_oto_szczesliwi_geniusze-3906.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-196',
    'kreatywnie-przeciw-koronawirusowi-muzeum-moich-marzen-klasy-1a-3681',
    'Kreatywnie przeciw koronawirusowi. Muzeum moich marzeń klasy 1A',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14406/800x600_img_0241.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				W ramach zajęć plastycznych dzieci z klasy 1A przygotowywały swoje własne muzeum. Proszę zobaczyć, jak wiele radości sprawiło  dzieciom to zadanie.<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14392/alte_autos-museum.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14392/800x600_alte_autos-museum.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14393/img_4830.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14393/800x600_img_4830.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14394/img_8885.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14394/800x600_img_8885.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14395/karolina.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14395/800x600_karolina.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14396/7e2a74a7-ce30-4cfe-883f-608893257f0c.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14396/800x600_7e2a74a7-ce30-4cfe-883f-608893257f0c.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14397/1.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14397/800x600_1.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Kreatywnie przeciw koronawirusowi. Muzeum moich marzeń klasy 1A',
    '',
    'https://wbs.pl/kreatywnie_przeciw_koronawirusowi_muzeum_moich_marzen_klasy_1a-3681.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-197',
    'spotkanie-z-pszczolami-3793',
    'Spotkanie z pszczołami',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14862/800x600__dsc0954.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Życie bez pszcz&oacute;ł jest niemożliwe- taką konkluzję wysnuli uczestnicy tej wycieczki.<br />
Zaczęliśmy od szk&oacute;łki kontenerowej. Podziwialiśmy tysiące gatunk&oacute;w drzew i przyglądaliśmy się procesowi ich powstawania.<br />
W nagrodę za zaangażowanie i ekologiczne myślenie otrzymaliśmy drzewko, kt&oacute;re następnego dnia posadziliśmy w naszej szkole.<br />
W pasiece ekologicznej  poznaliśmy zwyczaje pszcz&oacute;ł, smakowaliśmy produkty tych owad&oacute;w, zbudowaliśmy kratki do uli.<br />
Sami  odgrywaliśmy rolę robotnic, trutni i kr&oacute;lowej. Było dużo zabawy!<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14863/_dsc0937.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14863/800x600__dsc0937.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14864/_dsc0925.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14864/800x600__dsc0925.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14865/_dsc0930.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14865/800x600__dsc0930.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14866/_dsc0953.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14866/800x600__dsc0953.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14874/_dsc0930.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14874/800x600__dsc0930.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14875/_dsc0929_hp.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14875/800x600__dsc0929_hp.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14876/_dsc0933.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14876/800x600__dsc0933.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14877/_dsc0937.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14877/800x600__dsc0937.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14880/_dsc0940_hp.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14880/800x600__dsc0940_hp.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14881/_dsc0945_hp.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14881/800x600__dsc0945_hp.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14882/_dsc0949_hp.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14882/800x600__dsc0949_hp.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14884/_dsc0959.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14884/800x600__dsc0959.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14883/_dsc0952.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14883/800x600__dsc0952.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'wydarzenia'),
    'published',
    NULL,
    'Spotkanie z pszczołami',
    '',
    'https://wbs.pl/spotkanie_z_pszczolami-3793.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-198',
    'nagrania-do-podrecznikow-wydawnictwa-lektorklett-3809',
    'Nagrania do podręczników wydawnictwa LektorKlett',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14935/800x600_20200226_124425.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				12-13.11.2020 r. uczniowie z klasy 5a mieli przyjemność gościć w studiu Start International Polska, gdzie nagrywali materiał do podręcznik&oacute;w wydawnictwa Klett Verlag.<br />
To wspaniałe doświadczenie pozwoliło im poczuć się jak prawdziwi aktorzy. <br />
Start International Studio jest jednym z najbardziej znanych studi&oacute;w w Polsce, nagrywającym głosy dubbingowe dla wielu film&oacute;w takich jak Madagaskar.<br />
Nagranie było projektem wsp&oacute;łpracy Akademii Muzycznej WBS i wydawnictwa LektorKlett z Poznania.<br />
<br />
Dyrektor Akademii Muzycznej WBS<br />
Marcin Lemiszewski<br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nagrania do podręczników wydawnictwa LektorKlett',
    '',
    'https://wbs.pl/nagrania_do_podrecznikow_wydawnictwa_lektorklett-3809.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-199',
    'miedzynarodowy-dzien-kropki-w-wbs-3733',
    'Międzynarodowy Dzień Kropki w WBS',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/14683/800x600_20-09_09-punktetag-11.jpg);">
			</div>
		</div>
				<div class="site-text">
			<p>
				15 września obchodziliśmy w WBS <strong>Międzynarodowy Dzień Kropki</strong>. <br />
Tego dnia w naszej szkole nauczyciele organizują wiele ciekawych zabaw i happening&oacute;w, kt&oacute;re pomagają dzieciom odkrywać talenty, poznawać swoje mocne strony, pobudzać wyobraźnię i wsp&oacute;lnie się pobawić. Szczeg&oacute;lnie ważne jest uwrażliwienie dzieci na to, że każdy z nas jest inny. Efektem są wyjątkowe kropkowe dzieła sztuki. Zapraszamy do obejrzenia fotogalerii. <br />
<br />
Foto: Marek Kępiński, Olga Opielińska<br />
<br />
<br />
<br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/14682/20-09_09-punktetag-213.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14682/800x600_20-09_09-punktetag-213.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14684/20-09_09-punktetag-37.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14684/800x600_20-09_09-punktetag-37.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14686/20-09_09-punktetag-80.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14686/800x600_20-09_09-punktetag-80.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14687/20-09_09-punktetag-88.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14687/800x600_20-09_09-punktetag-88.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14688/20-09_09-punktetag-110.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14688/800x600_20-09_09-punktetag-110.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14689/20-09_09-punktetag-116.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14689/800x600_20-09_09-punktetag-116.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14690/20-09_punktetag-245.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14690/800x600_20-09_punktetag-245.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14691/20-09_09-punktetag-137.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14691/800x600_20-09_09-punktetag-137.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14692/20-09_09-punktetag-159.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14692/800x600_20-09_09-punktetag-159.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14693/20-09_punktetag-264.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14693/800x600_20-09_punktetag-264.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14694/20-09_punktetag-336.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14694/800x600_20-09_punktetag-336.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14695/20-09_punktetag-438.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14695/800x600_20-09_punktetag-438.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14696/20-09_punktetag-470.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14696/800x600_20-09_punktetag-470.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14697/20-09_punktetag-509.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14697/800x600_20-09_punktetag-509.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14698/20-09_punktetag-516.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14698/800x600_20-09_punktetag-516.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14699/img_20200916_144848.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14699/800x600_img_20200916_144848.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14700/img_20200916_144855.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14700/800x600_img_20200916_144855.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14701/img_20200916_144919.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/14701/800x600_img_20200916_144919.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/14702/img_20200916_144808.jpg" rel="prettyPhoto[galler',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Międzynarodowy Dzień Kropki w WBS',
    '',
    'https://wbs.pl/miedzynarodowy_dzien_kropki_w_wbs-3733.html',
    '2026-03-13T20:34:28.690Z',
    '2026-03-13T20:34:28.690Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-200',
    'akademia-pilkarska-wbs-warszawa-z-certyfikatem-pzpn-3496',
    'Akademia Piłkarska WBS Warszawa z certyfikatem PZPN!',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13729/800x600_screenshot_2019-12-18_akademia_pilkarska_wbs_warszawa.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Akademia Piłkarska WBS Warszawa jako jedna z 17 Akademii Piłkarskich w Warszawie otrzymała oficjalny certyfikat PZPN i brązową gwiazdkę PZPN na sezony 2019-20 oraz 2020-21!<br />
<br />
Gratulujemy i życzymy dalszych sukces&oacute;w!<br />
<br />
Więcej informacji na stronie: <a href="http://www.wbs-akademia.pl/wbs_warszawa_z_certyfikatem_pzpn-2823.html">http://www.wbs-akademia.pl/wbs_warszawa_z_certyfikatem_pzpn-2823.html</a><br />
<br />
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Akademia Piłkarska WBS Warszawa z certyfikatem PZPN!',
    '',
    'https://wbs.pl/akademia_pilkarska_wbs_warszawa_z_certyfikatem_pzpn-3496.html',
    '2026-03-13T20:34:28.691Z',
    '2026-03-13T20:34:28.691Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-201',
    'nasza-uczennica-debatuje-w-budapeszcie-3369',
    'Nasza uczennica debatuje w Budapeszcie',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13080/800x600_www4.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				Nasza uczennica Olga Rybałt, polska laureatka krajowa, dotarła do p&oacute;łfinału &quot;Jugend debattiert&quot; (finał międzynarodowy) w Budapeszcie (finał międzynarodowy). Społeczność szkolna WBS gratuluje tego wielkiego sukcesu!<br />
<br />
Wszystkich zainteresowanych publicznymi debatami na stałe tematy serdecznie zapraszamy do uczestnictwa w k&oacute;łku zainteresowań&nbsp; &quot;Młodzież debatuje&quot; (z klasy 8). <br />
			</p>

					</div>

		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/13081/foto.png" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13081/800x600_foto.png);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/13082/clipboard01.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/13082/800x600_clipboard01.jpg);">
			</a>
		</div>
		
	
</div>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Nasza uczennica debatuje w Budapeszcie',
    '',
    'https://wbs.pl/nasza_uczennica_debatuje_w_budapeszcie-3369.html',
    '2026-03-13T20:34:28.691Z',
    '2026-03-13T20:34:28.691Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-202',
    'wreczenie-pucharowbieg-sponsorowany-2828',
    'Wręczenie pucharów-bieg sponsorowany',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
		<div class="big-photo">
							<h5><span></span>Archiwum</h5>
						<div class="photo" style="background: url(pub/cms/photos/9933/800x600_sponsorlauf_pokal-22.jpg);">
			</div>
		</div>
		<div class="site-text">
			<p>
				26 września odbył się w naszej szkole bieg sponsorowany. W wydarzeniu tym, zorganizowanym wsp&oacute;lnie z Rotary Club Warszawa Goethe wzięli  udział uczniowie wszystkich klas oraz kadra nauczycielska.<br />
&bdquo;Pomagamy Afryce&rdquo;-to myśl przewodnia tego biegu, jego celem zaś zbi&oacute;rka funduszy na zakup szczepionek przeciwko polio.<br />
Udało nam się zebrać  <span style="color: rgb(255, 0, 0);"><strong>19 214,13 zł</strong></span>.  Połowę tej kwoty przeznaczymy na zakup dla dzieci z Afryki <strong><span style="color: rgb(255, 0, 0);">14 412</span></strong><span style="color: rgb(255, 0, 0);"> </span>szczepionek przeciwko polio. Druga część zostanie przeznaczona na projekty szkolne, o kt&oacute;rych zdecyduje samorząd uczniowski. <br />
<br />
Po zakończonych biegach nasi uczniowie uczestniczyli w kursach pierwszej pomocy, organizowanych przez naszego partnera &bdquo;Fundację Jednym Śladem&ldquo;.<br />
<br />
W piątek, 28.09 zostały wręczone nagrody i puchary. Oto lista zwycięzc&oacute;w:<br />
<br />
1.       Klasa 1 A &ndash; średnia ilość okrążeń 22,4<br />
2.       Klasa 4 A i klasa 7 C &ndash; średnia ilość okrążeń 21<br />
3.       Klasa 1 C, klasa 5 C i klasa 6 A &ndash; średnia ilość okrążeń 20,7<br />
<br />
W tym biegu wszyscy są zwycięzcami, gdyż biegliśmy w słusznej sprawie! <br />
<br />
Serdecznie dziękujemy organizatorom i uczestnikom za udział w tym wydarzeniu.<br />
<br />
Zdjęcia Marek Kępiński<br />
<br />
			</p>
		</div>


		<div class="row gallery">

	<h3>Galeria zdjeć</h3>
				
				<div class="col-sm-4">
			<a href="pub/cms/photos/9930/sponsorlauf_pokal-40.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9930/800x600_sponsorlauf_pokal-40.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9931/sponsorlauf_pokal-100.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9931/800x600_sponsorlauf_pokal-100.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9932/sponsorlauf_pokal-146.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9932/800x600_sponsorlauf_pokal-146.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9934/sponsorlauf_pokal-172.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9934/800x600_sponsorlauf_pokal-172.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9935/sponsorlauf_pokal-189.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9935/800x600_sponsorlauf_pokal-189.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9936/sponsorlauf_pokal-195.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9936/800x600_sponsorlauf_pokal-195.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9938/sponsorlauf_pokal-232.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9938/800x600_sponsorlauf_pokal-232.jpg);">
			</a>
		</div>
		
				<div class="col-sm-4">
			<a href="pub/cms/photos/9940/sponsorlauf_pokal-251.jpg" rel="prettyPhoto[gallery1]" title="" style="background: url(pub/cms/photos/9940/800x600_sponsorlauf_pokal-251.jpg);">
			</a>
		</div>
		
	
</div>

		<a href="archiwum-1589.html" title="Archiwum" class="btn btn-default">Powrót do listy</a>
	</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Wręczenie pucharów-bieg sponsorowany',
    '',
    'https://wbs.pl/wreczenie_pucharowbieg_sponsorowany-2828.html',
    '2026-03-13T20:34:28.691Z',
    '2026-03-13T20:34:28.691Z'
  ) ON CONFLICT (slug) DO NOTHING;
INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    'article-203',
    'szczesliwych-swiat-bozego-narodzenia-3505',
    'Szczęśliwych Świat Bożego Narodzenia!',
    '',
    '',
    '',
    '
		<p class="lead">
			
		</p>
				<div class="big-photo">
			<div class="photo" style="background: url(pub/cms/photos/13799/800x600_www4.png);">
			</div>
		</div>
				<div class="site-text">
			<p>
				<br />
<br />
<div style="text-align: center;"><img src="/pub/uploader/images/Weihnachtsgr____e_dsb.png" alt="Weihnachtsgr____e_dsb.png" width="565" height="395" /></div>
<br />
<br />
<br />
<div style="text-align: center;"><img src="/pub/uploader/images/Weihnachtsgr____e.png" alt="Weihnachtsgr____e.png" width="566" height="800" /></div>
			</p>

					</div>

			</div>
	',
    (SELECT id FROM categories WHERE slug = 'aktualnosci'),
    'published',
    NULL,
    'Szczęśliwych Świat Bożego Narodzenia!',
    '',
    'https://wbs.pl/szczesliwych_swiat_bozego_narodzenia-3505.html',
    '2026-03-13T20:34:28.691Z',
    '2026-03-13T20:34:28.691Z'
  ) ON CONFLICT (slug) DO NOTHING;

COMMIT;
