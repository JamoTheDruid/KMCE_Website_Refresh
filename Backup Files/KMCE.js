const navbarElement = document.querySelector('#nav');

function toHome () {
  document.querySelector('#mainTextElement').innerHTML = `
   <div class="home-p1">
      <div class="c1">
          Wireless Engineering and Project Management
      </div>
      <div class="c2">
          KM Consulting Engineers, Inc. a multi-disciplined engineering firm, is based in the Central New Jersey region. As a multi-disciplined consulting firm, KM has the resources to provide engineering services in civil, structural, electrical, and telecommunications. In this age of Cellular/PCS technology, KM Consulting Engineers, Inc. has dedicated itself to becoming a leading authority in telecommunications design, project management and installation. Our problem solving innovations have set standards throughout the industry which our competitors now imitate. In support of our tower engineering, we have extensive experience in non-destructive testing of tower foundation reinforcement. This experience has carried over to the design of caisson, helical, and micropiles for tower and building projects.
      </div>
    </div>
    <div class="home-p1">
      <div class="c1">
          Our Mission
      </div>
      <div class="c2">
          To achieve the goals and objectives that clients demand. To focus on project planning, micro-management of projects, and insistence on quality and time budgeting. This mission, along with details, standards, and deliverable deadlines has earned us recognition by clients and competitors.
      </div>
    </div>
  `
}

function toTowers() {
  document.querySelector('#mainTextElement').innerHTML = `
    <div class="c2">
      Communities are looking for ways to reduce the number of new tower structures in their jurisdictions. As a result, newly adapted ordinances and local codes call for maximum use on existing towers. Co-location has become a popular method of decreasing the influx of new towers. But before a wireless carrier can co-locate on an existing tower, the tower must be analyzed for new antennas, mounts and cable loading. Often, when tower structures are analyzed using the "Structural Standard for Steel Antenna Tower and Antenna Supporting Structures" (EIA/TIA-222-F) carriers discover that the tower is overstressed and cannot handle the new loads. This overloading is blocking many co-location efforts.
    </div>

    <div class="c1">
      Causing Stress
    </div>
    <div class="c2">
      <p>
        There are several factors that contribute to overstressed towers. First, the EIA standard has changed over the years and has added more stringent load and safety factors. Many older towers just do not meet today's standard requirements. Before the surge in paging, cellular and PCS site demand, tower owners did not have any reason to spend additional money on stronger, taller structures. Owners ordered towers for current requirements with some moderate growth potential. Few tower owners envisioned the need for towers that would hold multicarrier equipment.
      </p>
      <p>
        But even as tower procurement began, owners have continued to hamper tower structures by not taking the necessary steps to ensure their structures' capabilities.
      </p>
      <p>
        Owners have added antennas, mounts and coax cable to structures without re-analyzing these extra loads. Often owners do not remove old inactive antennas and associated mounts and cable. Another problem is that tower ownership is frequently transferred without updated inventories, structural drawings and current analysis.
      </p>
      <p>
        Now the damage is done, and the industry is discovering that a high percentage of existing towers fail the structural analysis when they are evaluated for new antennas and associated equipment. In fact, even when the analysis does not consider the new antennas and equipment, many towers fail the existing load evaluation.
      </p>
    </div>

    <div class="c1">
      Fixing the Problem
    </div>
    <div class="c2">
      <p>
        Despite this problem, there are limited options to solve overloading. The easiest method is to remove some of the existing sail area (antennas, mounts and cable) such as obsolete equipment. Before the tower is analyzed, the owner should inform the structural engineer that certain antennas will be obsolete and, therefore, the calculations should not include the sail area and dead weight of those antennas and related tower-mounted equipment (mounts and cable). Removing dead systems is a key factor in keeping the sail area of a tower in check.
      </p>
      <p>
        After inactive systems have been cleared from the tower, you may want to reinforce the tower so that it can handle additional loads. You can do this by changing out overstressed members and replacing them with larger capacity members or building up existing members to increase their capacity.      </p>
      <p>
        Changing out horizontals and diagonals is relatively easy. You brace the tower with temporary supports, remove the undersized member and insert the new member. Alternatively, you can build up diagonals and horizontals by either welding or bolting new members onto the existing member. Welding is more time-consuming and costly because the galvanized existing member must be removed to allow for welding. After welding, the member will require cold galvanizing or other appropriate rust protection.
      </p>
      <p>
        Changing out tower legs is not a popular option because it is a difficult process. The conventional method to reinforce legs is to build up the leg with longitudinally split pipe. This method of increasing the cross-sectional area of steel is time consuming and expensive. At each climbing lug, horizontal gusset plate and other tower leg attachment, the split section of pipe must be fitted or notched around the leg item. After fitting, the split section and the existing tower leg must be prepared for welding and then protected against rust. As with the diagonal/horizontal welding a qualified inspector should inspect the tower legs. This method of leg build-up is detailed and labor intensive. The required reinforcement cost often will outweigh the economics of the project.
      </p>
    </div>

    <div class="c1">
      A New Option
    </div>
    <div class="c2">
      <p>
        In addition to these traditional methods, there is a new alternative of leg reinforcement that is much easier and more cost-effective on hollow leg towers, the composite column construction method. When a tower leg is filled with structural non-shrinking grout, the fill is completely confined, which will increase the strength capacity of the leg. The structural grout reinforces the tubular steel section, thereby providing better stability and protection from local buckling. Because the steel tube provides the framework, you will not need reinforcement in the fill.
      </p>
      <p>
        Historically, concrete or structural grout filled tube sections were used in constructing columns and caissons. Composite columns have been used for many years in multistory buildings. Researchers have conducted extensive testing on composite (steel/concrete) members. They have completed some of this testing on circular tubes filled with concrete and with no reinforcement. The research took into account both axial and bending loading.
      </p>
      <p>
        Some research also has analyzed the effects of cyclic loading. These tests show that cyclic loading does not deteriorate bending strength. Using developed equations, researchers have recorded excellent agreement between calculated loads and experimental data. The design of grout reinforcement is based on equations that research papers developed.
      </p>
      <p>
        In addition to the research documents, AISC addresses composite column design in its Manual of Steel Construction, Load Resistance Factor Design. KM Consulting Engineers, Inc. design criteria for reinforcing tower legs is based on the review of research documents, which were more conservative than the AISC guidelines. Tower leg reinforcement is developed by injecting structural grout into the legs. The structural formulas and method of injection have been developed to allow for a conservative, safe capacity increase while ensuring that the leg has a homogenous filling of specified structural non-shrink grout.
      </p>
      <p>
        If you decide to use this method of reinforcement, it is important that you use an experienced grout contractor who has knowledge of pressure injection grouting and the proper equipment. During a pressure-injection sequence, an interruption of the filling process could result in a partially filled leg. Pressure monitoring, correct capacity of hoses and fittings, and an equipment break-down back-up plan are critical to the success of the filling operation. The structural non-shrink grout is just as important as the injection process. The flow ability, design strength, working time and set time must be designed, specified and adhered to during the construction process. You must take into consideration the temperatures of materials, ambient and pipe legs.
      </p>
      <p>
        Before you actually inject grout into the leg cavity, you must work out materials, equipment, water and power calculations to avoid grouting interruptions. The capacity of the grout pump must meet the desired lift for a given viscosity. The entire operation must be monitored and recorded.
      </p>
      <p>
        When this reinforcement method is properly engineered and executed by a qualified contractor, the result is an expeditious and efficient reinforcement of a tower leg system. A typical 180-foot tower can be reinforced in 12 to 16 working hours. The average grout (7,000psi to 9000psi) has a working time of 30 minutes and a set time of three to four hours.
      </p>
      <p>
        The 16-hour reinforcement process includes the preparation time for the tower legs and the staging of equipment and materials. The actual grouting runs between 15 minutes to 30 minutes per leg for a 180-foot tower.
      </p>
      <p>
        The addition of compressive strength to a tower leg varies with the leg material specifications, the unbraced length of leg and the diameter of the leg. A typical 6-inch diameter leg can gain approximately 60% additional capacity. As the diameter decreases the additional capacity rapidly decreases. For example, a 3-inch diameter leg gains approximately 25% additional capacity.
      </p>
    </div>

    <div class="c1">
      Saving Tool
    </div>
    <div class="c2">
      <p>
        Reinforcing tower legs to composite section columns is an economical alternative reinforcement method. However, this method alone will not save extremely overstressed tower legs or moderately overstressed slender legs. It will not cure overstressing in diagonals or horizontals, and it is applicable only to hollow leg towers. Yet, if a tower is experiencing moderate overstressing in leg compression and is considered a candidate for composite leg reinforcement, it is a tool that can save towers.
      </p>`;
}
function toWaterTanks() {
  document.querySelector('#mainTextElement').innerHTML = `
    <div class="head">
    You <strong><u>CAN</u></strong> Weld to Watertanks
    </div>
    
    <div class="written-by">
    : Michael L. Bohlinger, PE (Principal Engineer)
    </div>
    
    <div class="c3">
    Wireless companies continue to search out new existing locations to mount the cell site antenna. Over the last ten years, water tanks have been a site favored by most carriers. The tanks have reasonable height, are located in populous areas, are very strong from a structural aspect, and most water tank utility companies enjoy the revenue earned from carriers locating on their tanks.
    </div>

    <div class="c3">
    The only drawback occurs when a carrier wishes to attach the antenna and cable mounts to the tanks actual surface. If conventional arc stick welding is employed to attach the mounts, the transfer of heat to the interior metal surface will damage the special paint on the tanks inside surface. All drinking water tank interior surfaces are required to be painted and maintained with a special epoxy type paint. There are some exceptions to this paint where special liners or ceramic surfaces are employed, but for the vast majority of tanks, the interior metal is protected from rust by special epoxy paint.
    </div>

    <div class="c3">
    There have been alternate approaches to attaching equipment to tank surfaces such as epoxy or silicone gluing. There have also been attempts to band around the tank or even screwing into the tank with self-threading screws. Most tank owners reject any conventional welding or screwing into the tank since it will violate the interior coating.
    </div>

    <div class="c3">
    The increased demand to go onto existing tanks or to co-locate onto tanks has resulted in a challenge for engineers. In 1994, KM Consulting Engineers, Inc. was faced with the requirement to locate antenna and cable mounts on a water tank that already had multiple carriers attached to the tank's catwalk handrail. The handrails of tanks have been a popular mounting point since the tank surface problem goes away when attaching to the tank handrail. The problem resurfaces when the handrail is crowded with existing systems or the tank does not have a handrail.
    </div>

    <div class="c3">
    KM Consulting Engineers, Inc. has had previous experience on field weld attachment using stud welding. Stud arc welding, similar to arc stick welding, was first utilized in the early 1950's when a ship welder named Nelson developed a method to attach wood decking to aircraft carrier's landing deck. The process of arc stud welding is similar to arc stick welding wherein the gap between the stick or stud is arced by electricity thus melting both the surface and the stick or stud. This melting of the surface and stick/stud results in considerable heat since to melt or liquefy metal requires heating to around 1600 degrees Fahrenheit. This high heat combined with a rather long duration, one or two seconds with stick arc welding and approximately 0.01 to 0.33 seconds with arc stud welding, transfers heat to the interior surface and thus damages the paint.
    </div>

    <div class="c3">
    KM Consulting Engineers, Inc. contacted TRW Nelson stud welding to determine the heat transfer rate of stud welding. TRW Nelson informed KMCE of a new method of stud welding which does not transfer as much heat as stud welding. This new method, capacitor discharge stud welding, utilizes a welding machine that is basically a bank of capacitors. These capacitors store up a rather high electrical charge and then deliver this high charge to the weld application for a very short duration. An example would be a 1/4 inch stud taking 1/10 of a second for arc stud welding and 0.005 seconds for capacitor discharge stud welding. This high charge over a very short duration results in a complete fusion of stud and parent metals without the generation/transfer of high heat.
    </div>

    <div class="c3">
    Further research by KMCE resulted in obtaining a copy of an independent laboratory test of arc and capacitor discharge stud weld heat transfer rates through the parent metal. The lab tests showed that a 1/4 inch thick A-36 steel plate would transfer 445 degrees Fahrenheit for arc stud welding and 150 degrees Fahrenheit for capacitor discharge stud welding.
    </div>

    <div class="c3">
    The next step was to determine the capacity of the capacitor stud welds and to determine the limit that the interior paint could withstand. Technical data sheets were obtained that provided the limit of epoxy paint at the 275 degree Fahrenheit level. This is over 125 degrees Fahrenheit higher than the example of 1/4 inch stud on 1/4 inch plate. The process would work. The capacity of the studs was taken directly from the manufacturer's data sheets and was well within the loads applied from the antenna and cable mounts. This load is calculated by using the wind and ice factors from the EIA-222-F (Electronics Industry Association Standards for Steel Communication Tower and Antenna Mounting Structures).
    </div>

    <div class="c3">
    The process was now feasible, however, KM Consulting Engineers, Inc. was still concerned about paper/data feasibility and actual welding and possible damage. A series of tests were performed on a 1/4 inch thick A-36 plate that was painted with the actual epoxy special paint. The plate was stud welded using the capacitor discharge method. No damage or discoloration to the paint was recorded on the side of the plate opposite the stud. The quality (fusion) of the stud to parent metal was excellent. A 1/4 inch stud can hold 2800 lbs. in tension and 2150 lbs. in shear. Next, a similarly painted plate was capacitor discharge stud welded with the welding machine set both too hot (higher amperage) and too cool to see if we could damage the paint on the other side of the plate. Again, no damage was observed. It was now fine for engineers to design and specify capacitor discharge stud welding on water tank surfaces.
    </div>

    <div class="c3">
    Researching and discovering a way around a problem was exciting, however, developing and specifying demanding standards to ensure that the process is properly conducted was a project in itself. Consideration must be given to various factors when engineering a capacitor discharge stud welded mount. These factors include the loads on the mount from the weight of the systems, the wind load and ice loads. The height above ground of the mount and the thickness of the steel water tank plate must be determined, and the type of steel must be known. Another factor that has to be addressed is the experience and qualification of the contractor's personnel who are going to use the stud welding method. Preparation of the surface, weld machine settings, stud size, placement and spacing of the studs must be considered and specified. Consideration must be given to future moisture being trapped between the antenna mount attachment and the tank surface. The size and type of stud as well as the type of lock washer, hex nut and torque must be specified. In short, all aspects of the attachment must be accurately specified and adhered to if a proper attachment, without damage to the tank interior paint, is to occur.
    </div>

    <div class="c3">
    This method of antenna and cable attachment has opened new sites to the wireless carriers and has given water tank owners the benefits of having carriers on their tank without worry of damaging the interior paint and subsequently fouling the water. When properly engineered and specified, this attachment method is a safe and secure construction technique for attaching wireless equipment to water tank surfaces.
    </div>
  `;
}


function toBroadcastTowers() {
  document.querySelector('#mainTextElement').innerHTML = `
    <div class="c1">
    Broadcast Towers
    </div>

    <div class="c2" id="broadcast-1">
    In addition to KM's extensive experience in the cellular telecommunications industry, we have also supported the TV and radio broadcast industry.
    </div>

    <div class="c2" id="broadcast-2">
    Similar to the cellular industry, TV and broadcast towers require engineering when changing out antenna or adding new antenna. KM has assisted numerous broadcast stations with tower engineering to analyze, investigate, and reinforce their towers.
    </div>

    <div class="c2">
    Some of our clients include:
    </div>

    <ul>
      WMGM Channel 40 - Linwood, NJ<br>
      WZBN Channel 25 - Trenton, NJ<br>
      Telemundo - Philadelphia, PA<br>
      WPVI Channel 6 - Philadelphia, PA<br>
      Beach TV - Panama City Beach, FL; Desten, FL; Navarre, FL; Key West, FL<br>
      Davidson County Broadcasting, INC. - Lexington, NC<br>
      Radio Communications, INC. - West Haven, CT<br>
    </ul>
      `
}

function toTeam() {
  document.querySelector('#mainTextElement').innerHTML = `
  <div class="home-p1">
  <div class="page-title">
  Our Team
  </div>
  <div class="grid-title">
  Professional Staff
  </div>
  <div class="team-grid">
    <div>
    Michael L. Bohlinger, PE
    </div>
    <div>
    President/CEO
    </div>
    <div>
    Jonathan Utter, PE
    </div>
    <div>
    Senior Project Manager
    </div>
    <div>
    Doug Austin, EIT
    </div>
    <div>
    Project Manager
    </div>
    <div>
    Jesse Hsia, EIT
    </div>
    <div>
    Project Manager
    </div>
    <div>
    Sean Jamison
    </div>
    <div>
    Project Coordinator
    </div>
  </div>
  <div class="grid-title">
  Administration
  </div>
  <div class="team-grid" id="team-grid-2">
    <div>
    Mary Anne Bohlinger, CPA
    </div>
    <div>
    Vice President/CFO
    </div>
    <div>
    Linda Bailey Keller
    </div>
    <div>
    Marketing/Administration
    </div>
    <div>
    Karla Maldonado
    </div>
    <div>
    Senior Accountant
    </div>
  </div>
  </div>
  `;
}

function toClients() {
  document.querySelector('#mainTextElement').innerHTML = `
  <div class="client-grid">
    <div class="client-grid-form">
      <div class="client-grid-title">
        Wireless Carriers
      </div>
      <div class="client-grid-text">
        AT&T - Dallas, TX<br>
        Bell Atlantic Mobile - Philadelphia, PA<br>
        Clearwire Wireless - Kirkland, WA<br>
        Comcast Metrophone - Wayne, PA<br>
        Conestoga Wireless - Pennsylvania<br>
        Cricket Communications - Sewickley, PA<br>
        D & E Communications - Pennsylvania<br>
        MetroNS - New York, NY<br>
        MetroPCS - Fort Washington, PA<br>
        Nextel Communications - Bensalem, PA<br>
        Nextel Partners - Mechanicsburg, PA<br>
        NYNEX - New York<br>
        PageNet - Staten Island, NY & Wayne, PA<br>
        Sprint PCS - Mahwah, NJ<br>
        T-mobile Communications - Pennsylvania<br>
        T-mobile Communications - New York<br>
        Verizon - Basking Ridge, NJ<br>
      </div>
    </div> 
    
    <div class="client-grid-form">
      <div class="client-grid-title">
        Broadcast Companies
      </div>
      <div class="client-grid-text">
        Beach TV - Panama City Beach, FL; Destin, FL; Navarre, FL; Key West, FL<br>
        Davidson County Broadcasting, INC. - Lexington, NC<br>
        Midstate Radio - Trenton, NJ<br>
        NBC - New York, NY<br>
        Radio Communications, INC. - West Haven, CT<br>
        Telemundo - Philadelphia, PA<br>
        WLIR 107.1 FM - Garden City, NY<br>
        WMGM Channel 40 - Linwood, NJ<br>
        WPVI Channel 6 - Philadelphia, PA<br>
        WPW Comm. - Dallas, TX<br>
        WRCN - Riverhead, NY<br>
        WURD Radio - Philadelphia, PA<br>
        WZBN Channel 25 - Trenton, NJ<br>
      </div>
    </div>

    <div class="client-grid-form">
      <div class="client-grid-title">
        Tower Owners
      </div>
      <div class="client-grid-text">
        American Tower Corporation - Boston, MA<br>
        Guaranty Towers, LLC - Newtown Square, PA<br>
        Liberty Towers - Rockville, MD<br>
        Radio Communication Service - West Haven, CT<br>
        Radio Vision Cristiana Management Corp. - Paterson, NJ<br>
        SpectraSite - Cary, NC<br>
        Suburban Cable - Absecon, NJ<br>
        TeleCare - New York, NY<br>
        Unisite - Newtown, PA<br>
        United Radio Incorporated - Syracuse, NY<br>
        WFI/Entel - San Diego, CA<br>
      </div>
    </div>

    <div class="client-grid-form">
      <div class="client-grid-title">
        Miscellaneous Consultants
      </div>
      <div class="client-grid-text">
        A Saxon Design Group - Toms River, NJ<br>
        All-Points Technology Corporation (APT)<br>
        Anderson Engineering - Perkasie, PA<br>
        ArcNet, LLC - Holmdel, NJ<br>
        Atometricks Engineering - West Nyack, NY<br>
        Avoca Architects - Piscataway, NJ<br>
        Black & Veatch - Paramus, NJ<br>
        CDMI - Clark Summit, PA<br>
        Civil Solutions - Hammonton, NJ<br>
        Communication Installers - Wynantskill, NY<br>
        Cook Environmental - Trevose, PA<br>
        Cross River Fiber - Morristown, NJ<br>
        E2 Project Management - Rockaway, NJ<br>
        Equity Communications - Atlantic City, NJ<br>
        FDH Engineering - Raleigh, NC<br>
        French and Parrello - Holmdel, NJ<br>
        Goodkind and O'Dea, Inc - Mt Laurel, NJ<br>
        Herbst Musciano Architects - Cedar Knolls, NJ<br>
        HighTower Solutions - Bennington, NE<br>
        Industrial Communications - Easton, PA<br>
        Jacobs - King of Prussia, PA<br>
        Kuhn Radio Electronics - York, PA<br>
        On Air Engineering - Boston, MA<br>
        Overland Contracting - Garner, NC<br>
        Pro-Comm - Berlin, MA<br>
        Pyramid Network - E. Syracuse, NY<br>
        Salient Systems - Austin, TX<br>
        Skynet Wireless Group - Totowa, NJ<br>
        Smartlink - Annapolis, MD<br>
        William F. Collins - Setauket, NY<br>
      </div>
    </div>

    <div class="client-grid-form">
      <div class="client-grid-title">
        Other Clients
      </div>
      <div class="client-grid-text">
        Bristol Industries - Langhorne, PA<br>
        C. Marchall Friedman - St. Louis, MO<br>
        GATX New York Harbor Unit - New York<br>
        GATX Terminals Corp - Carteret, NJ<br>
        GATX Terminals Corp - Elizabeth, NJ<br>
        Joel David Zieden Architects - Princeton, NJ<br>
        Kamlesh Shah Designs, Inc - Cranbury, NJ<br>
        Los Angeles County, CA<br>
        LHTW Corporation - Bensalem, PA<br>
        Madison Apartment Group - Philadelphia, PA<br>
        Mercer County, NJ<br>
        Mobil Oil Corp - Linden, NJ<br>
        Newburgh Metals - Newburgh, NY<br>
        NJ Division of Building & Construction - Trenton, NJ<br>
        Penn National - Philadelphia, PA<br>
        Paris Bakery - Hamilton, NJ<br>
        Philadelphia Park - Bensalem, PA<br>
        PSE & G - Harrison, NJ<br>
        Rhone-Poulenc - New Brunswick, NJ<br>
        Sun Oil Corp - Philadelphia, PA<br>
        Wild Flowers - Pennington, NJ<br>
      </div>
    </div>
  </div>
  `;
}

function toPictures() {
  document.querySelector('#mainTextElement').innerHTML = ` 
  
  <div class="pictures-title">
  Pictures
  </div>
  <div class=".pictures-grid">
    <div class="pictures-sub-grid">
      <img>
      </img>  
      <div>
      </div>
    </div>
  </div>
  `;
}