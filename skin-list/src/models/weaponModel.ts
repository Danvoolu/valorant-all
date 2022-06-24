export interface apiRes {
  weapons: Weapons;
}

export interface Weapons {
  data: Weapon[];
  status: number;
}

export interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: WeaponStats;
  shopData: WeaponShopData;
  skins: Array<WeaponSkin>;
  displayIcon: string;
}

export interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
  shotgunPelletCount: number;
  wallPenetration: string;
  feature: string;
  fireMode: string;
  altFireType: string;
  adsStats: WeaponAdsStats;
  altShotgunStats: WeaponsShotgunStats;
  airBurstStats: WeaponsBurstStats | null;
  damageRanges: Array<WeaponDamageRange>;
}

export interface WeaponsShotgunStats {
  shotgunPelletCount: number;
  burstRate: number;
}

export interface WeaponsBurstStats {
  shotgunPelletCount: number;
  burstsDistance: number;
}

export interface WeaponShopData {
  cost: number;
  category: string;
  categoryText: string;
  gridPosition: WeaponShopDataGridPosition;
  image: string;
  newImage: string;
  newImage2: string;
  assetPath: string;
}

export interface WeaponDamageRange {
  rangeStartsMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
}

export interface WeaponAdsStats {
  zoomMultiplier: number;
  fireRate: number;
  runSpeedMultiplier: number;
  burstCount: number;
  firstBulletAccuracy: number;
}

export interface WeaponShopDataGridPosition {
  row: number;
  column: number;
}

export interface WeaponSkin {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  assetPath: string;
  chromas: Array<WeaponSkinChroma>;
  levels: Array<WeaponSkinLevel>;
}

export interface WeaponSkinChroma {
  uuid: string;
  displayName: string;
  displayIcon: string;
  fullRender: string;
  swatch: any;
  assetPath: string;
}

export interface WeaponSkinLevel {
  uuid: string;
  displayName: string;
  levelItem: any;
  displayIcon: string;
  assetPath: string;
}
