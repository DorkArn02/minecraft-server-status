export interface MinecraftServerStatus {
    players: {
        online: number,
        max: number
    },
    version: {
        name: string,
        protocol: number
    },
    motd: {
        raw: string,
        clean: string,
        html: string
    },
    favicon: string
}